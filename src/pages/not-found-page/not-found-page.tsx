
function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--login">
        <div className="container">
          <h1>404. Page not found</h1>
          <a href='/'>
            Вернуться на главную
          </a>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
