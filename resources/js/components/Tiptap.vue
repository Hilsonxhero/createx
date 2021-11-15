<template>
    <div class="editor" v-if="editor">
        <menu-bar class="editor__header" :editor="editor">
            <template v-slot:image>
                <button @click="openModal" class="menu-item" title="image">
                    <svg class="remix">
                        <use :xlink:href="`${remixiconUrl}#ri-image-line`" />
                    </svg>
                </button>
            </template>
        </menu-bar>

        <editor-content
            v-bind="$attrs"
            class="editor__content"
            :editor="editor"
        />

        <dropzone-modal ref="dropzone" @image="upload"></dropzone-modal>
    </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Highlight from "@tiptap/extension-highlight";
import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import MenuBar from "./MenuBar.vue";
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import DropzoneModal from "./DropzoneModal.vue";
import { ref, onMounted, onUnmounted } from "@vue/composition-api";
export default {
    inheritAttrs: false,
    components: {
        EditorContent,
        MenuBar,
        DropzoneModal
    },

    props: {
        content: {
            require: true
        }
    },

    setup(props, { emit }) {
        const dropzone = ref(null);

        const editor = ref(null);

        const openModal = () => {
            dropzone.value.openModal();
        };

        const upload = data => {
            const src = data.attrs;
            editor.value
                .chain()
                .focus()
                .setImage(src)
                .run();
        };
        onMounted(() => {
            editor.value = new Editor({
                extensions: [
                    StarterKit.configure({
                        history: true
                    }),
                    Placeholder.configure({
                        emptyEditorClass: "is-editor-empty",
                        emptyNodeClass: "my-custom-is-empty-class",
                        placeholder: "My Custom Placeholder"
                    }),
                    Highlight,
                    TaskList,
                    TaskItem,
                    Image,
                    CharacterCount.configure({
                        limit: 10000
                    })
                ],
                content: props.content,

                onUpdate: () => {
                    emit("input", editor.value.getHTML());
                }
            });
        });

        onUnmounted(() => {
            editor.value.destroy();
        });

        return {
            editor,
            dropzone,
            remixiconUrl,
            openModal,
            upload
        };
    }
};
</script>
