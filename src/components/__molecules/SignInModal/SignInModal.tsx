import CustomInput from "@/components/__atoms/CustomInput/CustomInput";
import PrimaryButton from "@/components/__atoms/PrimaryButton/PrimaryButton";
import { userLogin, logIn } from "@/redux/features/auth-slice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorIcon from "../../../../public/icons/ErrorIcon";
import CloseIcon from "../../../../public/icons/CloseIcon";
import SuccessIcon from "../../../../public/icons/SuccessIcon";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

interface signInModalProps {
  setIsModalActive: (arg0: boolean) => void;
  handleModal: (isActive: boolean) => void;
}

const SignInModal = ({ handleModal, setIsModalActive }: signInModalProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = () => {
    setIsSubmitting(true);

    if (!email || !validateEmail(email)) {
      setEmailError("ელ-ფოსტა არ მოიძებნა");
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    dispatch<any>(userLogin(email))
      .unwrap()
      .then(() => {
        setIsSubmitting(false);
        setEmailError("");
        dispatch(logIn());
        localStorage.setItem("isAuth", "true");
      })
      .catch((error: any) => {
        setIsSubmitting(false);
        console.error("Login failed:", error);
      });
  };
  const validateEmail = (email: string) => {
    const emailPattern = /@redberry\.ge$/i;
    return emailPattern.test(email);
  };

  const handleOkayButton = () => {
    setIsModalActive(false);
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
              errors={isError}
              label="ელ ფოსტა"
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
              <PrimaryButton
                onclick={handleOkayButton}
                styles="w-[432px] h-[40px] mt-12"
                text="კარგი"
                disabled={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
