import AuthForm from "@/widgets/auth-form/ui/AuthForm"

const AuthPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}

export default AuthPage
