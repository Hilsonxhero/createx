import {ref} from '@vue/composition-api'
export default function (event) {
    const data = ref(null)
    const file = event.target.files[0]

    const reader = new FileReader()
    reader.onload = (image) => {
       data.value = image.target.result
    }

    reader.readAsDataURL(file)

    return data

}
