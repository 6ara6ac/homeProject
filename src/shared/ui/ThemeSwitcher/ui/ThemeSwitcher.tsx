import { classNames } from 'shared/lib/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/themeLight.svg';
import DarkIcon from 'shared/assets/icons/themeDark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
