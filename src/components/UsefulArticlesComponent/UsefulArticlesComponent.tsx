import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useTheme, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Article = {
  id: number;
  title: string;
  description: string;
  timeToRead: string;
  image: string;
  route: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: 'Як підібрати акумулятор для генератора',
    description:
      'Правильний вибір акумулятора для генератора є важливим кроком, який гарантує надійну та ефективну роботу пристрою.',
    timeToRead: '5 хвилин на прочитання',
    image: '/images/usefulArticlesImage1.png',
    route: '/article/1'
  },
  {
    id: 2,
    title: '5 порад як зекономити на використанні генератора',
    description:
      'Бензинові генератори — це ефективний спосіб забезпечити автономне електропостачання, але їх використання може стати досить витратним через вартість палива.',
    timeToRead: '10 хвилин на прочитання',
    image: '/images/usefulArticlesImage2.png',
    route: '/article/2'
  },
  {
    id: 3,
    title: 'Як обрати генератор для квартири: основні поради',
    description:
      'Вибір генератора для дачі – важливе рішення, адже від цього залежить комфорт і можливістьповноцінного використання електроприладів під час відсутності централізованого електропостачання.',
    timeToRead: '7 хвилин на прочитання',
    image: '/images/useFulArticlesImage3.png',
    route: '/article/3'
  }
];

const ArticleCard: React.FC<Article> = ({ title, description, timeToRead, image, route }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Card
      onClick={() => navigate(route)}
      sx={{
        cursor: 'pointer',
        maxWidth: 345,
        borderRadius: 2,
        border: `1px solid ${theme.palette.button.disabled}`,
        p: 2
      }}>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{ borderRadius: 1, mb: 1 }}
      />
      <CardContent
        sx={{
          p: 0,
          '&:last-child': {
            paddingBottom: 0
          }
        }}>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            color: theme.palette.grey[600]
          }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.grey[400],
            mb: '12px'
          }}>
          {description}
        </Typography>
        <Typography
          variant="thirdText"
          display="block"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            mb: 0
          }}>
          {timeToRead}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const UsefulArticlesComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: '32px'
      }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          color: theme.palette.grey[600]
        }}>
        Корисні статті
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          pt: '24px'
        }}>
        {articles.map((article) => (
          <Box key={article.id}>
            <ArticleCard {...article} />
          </Box>
        ))}
      </Box>
      <Box sx={{ pt: 2 }}>
        <Button
          component={Link}
          to="/all-articles"
          variant="contained"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.grey[50],
            borderRadius: '8px',
            height: '34px',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
            textTransform: 'none'
          }}>
          Всі статті
        </Button>
      </Box>
    </Box>
  );
};
