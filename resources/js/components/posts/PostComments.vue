<template>
    <div class="mt-10">
        <v-card>
            <div class="d-flex flex-row align-center">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="data.user.profile_src"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <div>{{ data.user.name }}</div>
                        <div class="caption text--grey">
                            {{ data.created_at }}
                        </div>
                    </v-list-item-content>
                </v-list-item>
                <v-spacer></v-spacer>
                <div class="d-flex flex-row">
                    <v-btn
                        icon
                        color="grey"
                        class="ml-1"
                        v-if="canShow"
                        @click="deleteComment"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        color="grey"
                        class="ml-3"
                        @click="showReply = !showReply"
                    >
                        <v-icon>mdi-undo</v-icon>
                    </v-btn>
                </div>
            </div>
            <v-card-text class="text-justify">
                {{ data.content }}
            </v-card-text>

            <div v-if="showReply">
                <div class="d-flex flex-row align-center">
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img :src="data.user.profile_src"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div>{{ data.user.name }}</div>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <v-list-item>
                    <v-textarea
                        placeholder="پاسخ خود را بنویسید .."
                        v-model="reply.content"
                    ></v-textarea>
                </v-list-item>
                <div class="d-flex justify-end ml-5 my-3">
                    <v-btn
                        rounded
                        color="primary"
                        outlined
                        large
                        @click="saveReply"
                        :disabled="!disableBtn"
                        >ارسال پاسخ
                    </v-btn>
                </div>
            </div>
        </v-card>

        <post-comments
            v-for="comment in data.replies"
            :key="comment.id"
            :data="comment"
            style="border-right: 2px solid red"
        >
        </post-comments>
    </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "@vue/composition-api";

export default {
    name: "PostComments",
    props: {
        data: {
            type: Object
        }
    },

    setup(props, { root }) {
        const showReply = ref(false);
        const disableBtn = ref(false);
        const reply = ref({
            comment_id: props.data.id,
            post_id: props.data.post_id,
            content: null
        });
        const comment = ref(props.data);

        const saveReply = () => {
            axios
                .post(`/api/replies/${root.$route.params.slug}`, reply.value)
                .then(() => {
                    showReply.value = false;
                    reply.value.content = null;
                });
        };

        const deleteComment = () => {
            axios.delete(`/api/comments/${props.data.id}`).then(() => {});
        };

        const canShow = computed(() => {
            return (
                root.$store.state.user.isLoggedIn &&
                root.$store.state.user.user.id == props.data.user_id
            );
        });

        onMounted(() => {
            Echo.channel(`virgool_reply_${props.data.id}`).listen(
                ".reply.created",
                ({ reply }) => {
                    comment.value.replies.push(reply);
                }
            );

            Echo.channel(`virgool_reply_${props.data.id}`).listen(
                "CommentDeletedEvent",
                event => {
                    comment.value.replies = comment.value.replies.filter(
                        c => c.id !== event.comment.id
                    );
                }
            );
        });

        watch(
            () => reply.value.content,
            value => {
                if (reply.value.content && value.length > 5) {
                    disableBtn.value = true;
                } else {
                    disableBtn.value = false;
                }
            }
        );
        return {
            showReply,
            reply,
            disableBtn,
            saveReply,
            deleteComment,
            canShow,
            comment
        };
    }
};
</script>
