<template>
    <v-container>
        <v-row class="mt-10 justify-center">
            <v-col cols="12" md="10" class="d-flex flex-row align-center">
                <v-text-field
                    class="draft-text-field pr-4"
                    field="عنوان متن"
                    placeholder="عنوان متن"
                    v-model="title"
                    @input="updateDraft"
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    class="mt-5"
                    v-if="showSavingDraft"
                    @click="saveDraft"
                    >ذخیره پیش نویس</v-btn
                >
            </v-col>
            <v-col cols="12" md="10">
                <tiptap
                    v-model="content"
                    :content="content"
                    @input="updateDraft"
                    ref="tiptap"
                />
            </v-col>

            <v-snackbar
                v-model="snackbar.saved.status"
                :timeout="1500"
                color="success"
            >
                {{ snackbar.saved.text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar.saved.status = false"
                    >
                        بستن
                    </v-btn>
                </template>
            </v-snackbar>

            <v-snackbar
                v-model="snackbar.error.status"
                :timeout="1500"
                color="error"
            >
                {{ snackbar.error.text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar.error.status = false"
                    >
                        بستن
                    </v-btn>
                </template>
            </v-snackbar>
        </v-row>
    </v-container>
</template>
<script>
import { debounce } from "lodash";
import Tiptap from "@/components/Tiptap.vue";
import { ref, computed } from "@vue/composition-api";
export default {
    name: "Create",
    components: { Tiptap },
    setup(props, { emit, root }) {
        const snackbar = ref({
            saved: { text: "ذخیره پیش نویس موفقیت آمیز بود", status: false },
            error: { text: "ذخیره پیش نویس موفقیت آمیز نبود", status: false }
        });
        const tiptap = ref(null);
        const title = ref("");
        const content = ref("");
        const requestType = ref("post");
        const requestUrl = ref("/api/posts/create");
        const showSavingDraft = computed(() => {
            return title.value && content.value;
        });

        const updateDraft = debounce(function() {
            updateDraftStore()
                .then(({ data }) => {
                    if (requestType.value === "post") {
                        history.replaceState({}, "", data.link);
                        requestUrl.value = `/api${data.link}`;
                    }
                    requestType.value = "patch";
                    snackbar.value.saved.status = true;
                })
                .catch(({ response }) => {
                    snackbar.value.error.status = true;
                });
        }, 2000);

        const saveDraft = () => {
            updateDraft.cancel();
            updateDraftStore().then(({ data }) => {
                const link = data.link
                    ? data.link
                    : `/drafts/${root.$route.params.link}`;
                root.$router.push(`${link}/save`);
            });
        };

        const updateDraftStore = () => {
            return root.$store.dispatch("draft/saveDraft", {
                requestType: requestType.value,
                requestUrl: requestUrl.value,
                title: title.value,
                content: content.value
            });
        };

        const link = root.$route.params.link;
        if (link) {
            (requestType.value = "patch"),
                (requestUrl.value = "/api/drafts/" + link);
            axios.get(`/api/drafts/${link}`).then(({ data }) => {
                (title.value = data.title), (content.value = data.content);
                tiptap.value.editor.commands.setContent(data.content);
            });
        }

        return {
            updateDraft,
            saveDraft,
            updateDraftStore,
            showSavingDraft,
            snackbar,
            title,
            content,
            requestType,
            requestUrl,
            tiptap
        };
    }
};
</script>
