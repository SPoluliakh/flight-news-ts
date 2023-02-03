import { useLocation, useParams } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';
import { CardContent } from '@mui/material';
import { useFetchArticlesByIdQuery } from 'Redux/Articles/articlesOperations';
import * as SC from './ArticleDetails.styled';
import { CustomLink } from 'components/CustomLink/CustomLink';

export const ArticleDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data } = useFetchArticlesByIdQuery(id);

  return (
    <SC.Section>
      <h1 className="visually-hidden ">Detail information</h1>
      {data && (
        <SC.Wrap>
          <SC.Image
            component="img"
            src={`${data.imageUrl}`}
            alt={`${data.title}`}
          />
          <SC.InnerWrap>
            <CardContent>
              <h1>{data.title}</h1>
              <p>
                {data.summary}. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Earum totam accusamus ad rem architecto
                tempore asperiores rerum deleniti expedita magni eius quidem
                dolorum qui adipisci fuga dolor, doloremque ab! Amet Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Praesentium quo
                nemo voluptates corrupti minus magni iure suscipit laborum,
                ullam consequatur eveniet neque placeat facere hic, harum
                'architecto. Iusto, tempore assumenda. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Earum totam accusamus ad rem
                architecto tempore asperiores rerum deleniti expedita magni eius
                quidem dolorum qui adipisci fuga dolor, doloremque ab! Amet
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium quo nemo voluptates corrupti minus magni iure
                suscipit laborum, ullam consequatur eveniet neque placeat facere
                hic, harum architecto. Iusto, tempore assumenda. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit.'
              </p>
            </CardContent>

            <CustomLink to={location.state.from}>
              <FcLeft size="24" /> Go back
            </CustomLink>
          </SC.InnerWrap>
        </SC.Wrap>
      )}
    </SC.Section>
  );
};
