import { useForm } from "react-hook-form"

type FormValues = {
  document: string
  documentType: string
  phone: string
  privacy: boolean
  commercial: boolean
}

export function useHomeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      document: "",
      documentType: "",
      phone: "",
      privacy: false,
      commercial: false,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log("Datos enviados ✅:", data)
    alert("Formulario enviado correctamente")
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}
