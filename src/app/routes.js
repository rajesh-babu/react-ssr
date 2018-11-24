import Root, { NotFound, Home, Todos } from '@pages';
import { prefetchTodos } from '@pages/Todos/actions';
import { prefetchCMSData } from '@pages/Home/actions';

export const routes = [
  {
    path: '/*',
    exact: true,
    menu: 'Home',
    loadData: prefetchCMSData,
    component: Home
  },
  {
    path: '/todos',
    exact: true,
    menu: 'Todos',
    loadData: prefetchTodos,
    component: Todos
  }

];

export default [
  {
    component: Root,
    routes
  }
];
/*
  {
    path: '/*',
    component: NotFound
  }
*/