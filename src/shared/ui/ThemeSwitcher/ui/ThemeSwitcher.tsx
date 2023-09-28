import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/themeLight.svg'
import DarkIcon from 'shared/assets/icons/themeDark.svg'
import { Theme } from 'app/providers/ThemeProvider';
import Button, { ThemeButton } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
    <Button theme={ThemeButton.CLEAR} className={
        classNames(cls.ThemeSwitcher, {}, [className])} 
        onClick={toggleTheme}>{
            theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
            </Button>
);
};

export default ThemeSwitcher;