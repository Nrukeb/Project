import { DropdownItem } from "../../../../shared/ui/Popups/components/Dropdown/Dropdown";

type TGetDropdownItemsProps = {
    onLogoute: () => void
    isAuth: boolean;
}

export const getDropdownItems = (props: TGetDropdownItemsProps): DropdownItem[] => {
    const  {
        onLogoute,
        isAuth
    } = props;

    return isAuth ? [
        {
            content:"Профиль",
            href: "/profile"
        },
        {
            content: "Выйти",
            onClick: onLogoute
        }
    ] : [
        {
            content: "Войти",
            href: "/auth"
        }
    ];
};