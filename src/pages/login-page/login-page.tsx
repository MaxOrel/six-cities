import { useActionCreators } from '@store/hooks/useActionCreator';
import { userActions } from '@store/slices/user';
import { useState } from 'react';

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {login} = useActionCreators(userActions)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formData);
  }
  return (
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>

      </div>
  );
}
export default LoginPage;
