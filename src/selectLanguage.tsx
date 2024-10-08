import { useEffect } from "react";
import Select from "react-select";
import CountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const languages: any = [
  { value: "pt", label: "Português", flag: "BR" },
  { value: "en", label: "English", flag: "US" },
  { value: "es", label: "Español", flag: "ES" },
  { value: "zh", label: "中文", flag: "CN" },
  { value: "he", label: "עברית", flag: "IL" },
  { value: "ar", label: "العربية", flag: "SA" },
  { value: "de", label: "Deutsch", flag: "DE" },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    marginTop: "8px",
    borderRadius: "5px",
    borderColor: "#ccc",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#888",
    },
  }),
  option: (provided: any) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const LanguageSelector = ({ onChange }: any) => {
  const handleChange = (selectedOption: any) => {
    onChange(selectedOption.value);
  };

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    console.log(currentLanguage);
  }, []);

  return (
    <Select
      defaultValue={languages.find(
        (lang: any) => lang.value === currentLanguage
      )}
      // @ts-ignore
      options={languages.map(({ value, label, flag }) => ({
        value,
        label: (
          <div style={{ display: "flex", alignItems: "center", zIndex: 999 }}>
            <CountryFlag
              countryCode={flag}
              svg
              style={{ width: "1.5em", height: "1.5em", marginRight: "8px" }}
            />
            {label}
          </div>
        ),
      }))}
      styles={customStyles}
      onChange={handleChange}
      className="!absolute !top-5 !right-10 !w-64 z-30"
      placeholder="Select Language"
      isSearchable={false}
    />
  );
};

export default LanguageSelector;
