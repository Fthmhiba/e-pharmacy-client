import toast from "react-hot-toast"
// npm i react-hot-toast

export const successToast = (message)=>{
    toast.success(message)
}
export const errorToast = (message)=>{
    toast.error(message)
}