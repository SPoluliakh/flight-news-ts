import { AppBar, Toolbar } from '@mui/material';
import { pages } from 'Utils/pages';
import { FcKindle } from 'react-icons/fc';
import { CustomLink } from 'components/CustomLink/CustomLink';

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar component="nav">
        <FcKindle size="42" />
        {pages.map(({ href, text }) => (
          <CustomLink key={text} to={href}>
            {text}
          </CustomLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};
