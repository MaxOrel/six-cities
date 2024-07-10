import clsx from 'clsx';
import style from './not-found-page.module.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--login">
        <div className={clsx(style.notFound, 'container')}>
          <h1 className={style.notFound__title}>404. Page not found</h1>
          <a href='/'>
            Вернуться на главную
          </a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
