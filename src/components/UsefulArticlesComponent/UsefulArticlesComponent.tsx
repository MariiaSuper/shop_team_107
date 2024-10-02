import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link, useTheme } from '@mui/material';
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
    description: 'Навіщо потрібен акумулятор для генератора? Про останній мова не йде...',
    timeToRead: '5 хвилин на прочитання',
    image: '/images/usefulArticlesImage1.png',
    route: '/article/1'
  },
  {
    id: 2,
    title: 'Який генератор вибрати для дачі',
    description: 'Генератор для дачі — це класика жанру...',
    timeToRead: '10 хвилин на прочитання',
    image: '/images/usefulArticlesImage2.png',
    route: '/article/2'
  },
  {
    id: 3,
    title: 'Як зекономити на бензиновому генераторі',
    description: 'Енергозабезпечення з різних причин залишає бажати кращого...',
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
        border: '1px solid #c6d7d7',
        p: 2
      }}>
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{ borderRadius: 1, mb: 1 }}
      />
      <CardContent sx={{ p: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 590,
            fontSize: '18px',
            lineHeight: '23.4px',
            color: theme.palette.grey[600]
          }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18.2px',
            color: theme.palette.grey[400],
            mb: '12px'
          }}>
          {description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {timeToRead}
        </Typography>
      </CardContent>
    </Card>
  );
};

const UsefulArticlesComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: '40px' }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          // pb: 2,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 590,
          fontSize: '24px',
          lineHeight: '31.2px',
          color: theme.palette.grey[600]
        }}>
        Корисні статті
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
        }}>
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </Box>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Link href="/all-articles" variant="body1">
          Всі статті
        </Link>
      </Box>
    </Box>
  );
};

export default UsefulArticlesComponent;
