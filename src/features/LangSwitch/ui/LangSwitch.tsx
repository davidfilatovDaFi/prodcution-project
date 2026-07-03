import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./LangSwitch.module.scss";

interface LangSwitchProps {
  className?: string;
}

export const LangSwitch = ({ className }: LangSwitchProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      onClick={toggleLang}
      className={classNames(cls.LangSwitch, {}, [className])}
    >
      {t("Перевести")}
    </Button>
  );
};
