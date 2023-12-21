import CustomInput from "@/components/__atoms/CustomInput/CustomInput";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import { userLogin, logIn } from "@/redux/features/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ErrorIcon from "../../../../public/icons/ErrorIcon";
import CloseIcon from "../../../../public/icons/CloseIcon";
import SuccessIcon from "../../../../public/icons/SuccessIcon";

interface signInModalProps {
  handleModal: (isActive: boolean) => void;
}

const SignInModal = ({ handleModal }: signInModalProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    setIsSubmitting(true);

    if (!email || !validateEmail(email)) {
      setEmailError("ელ-ფოსტა არ მოიძებნა");
      setIsSubmitting(false);
      return;
    }

    dispatch(userLogin(email))
      .unwrap()
      .then(() => {
        setIsSubmitting(false);
        setEmailError("");

        dispatch(logIn(email));

        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Login failed:", error);
      });
  };
  const validateEmail = (email: string) => {
    const emailPattern = /@redberry\.ge$/i;
    return emailPattern.test(email);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[480px] h-[300px] bg-white rounded-xl p-4 relative">
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => handleModal(false)}
        >
          <CloseIcon />
        </div>
        {!isAuth ? (
          <>
            <h4 className="text-primaryBlack text-2xl font-bold text-center mt-10">
              შესვლა
            </h4>
            <CustomInput
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              width="432px"
              placeholder="Example@redberry.ge"
            />
            {emailError && (
              <div className="flex items-center gap-2 mt-2">
                <ErrorIcon />
                <p className="text-[#EA1919] text-xs">{emailError}</p>
              </div>
            )}
            <PrimaryButton
              onclick={handleLogin}
              disabled={!email && true}
              text="შესვლა"
              styles="w-[432px] h-[40px] mt-[24px]"
            />
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <div className="mt-16">
                <SuccessIcon />
              </div>
              <p className="text-primaryBlack text-xl font-bold mt-4 mt">
                წარმატებული ავტორიზაცია
              </p>
              <PrimaryButton styles="w-[432px] h-[40px] mt-12" text="კარგი" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
