import { ref, reactive, computed, toRefs } from '@vue/composition-api'
import store from '@/store'

export default function DraftModule() {

    const data = reactive({
        deleteDialogDraft: false,
        deletableDraft: {},
        drafts: computed(() => store.state.draft.drafts),
        drafts_count: computed(() => store.state.draft.drafts_count),
    })


    const openDeleteDraftDialog = (index, link) => {
        data.deleteDialogDraft = true
        data.deletableDraft = { index, link }
    }
    const deleteDraft = () => {
        store.dispatch('draft/deleteDraft', data.deletableDraft)
            .then(() => {
                cancelDeleteDraft()
            })

    }
    const cancelDeleteDraft = () => {
        data.deleteDialogDraft = false
        data.deletableDraft = {}
    }

    const fetchAllDrafts = () => {
        store.dispatch('draft/fetchDrafts')
    }

    return {
        ...toRefs(data),
        openDeleteDraftDialog,
        deleteDraft,
        cancelDeleteDraft,
        fetchAllDrafts
    }
}