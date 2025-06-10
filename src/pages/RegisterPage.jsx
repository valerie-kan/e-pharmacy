import AuthTemplate from "../components/AuthTemplate/AuthTemplate";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <AuthTemplate isRegisterPage={true}>
        <RegisterForm isRegisterPage={true} />
      </AuthTemplate>
    </>
  );
};

export default RegisterPage;
