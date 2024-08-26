import { LOCATIONS, textError } from '@shared/constants';
import { useActionCreators } from '@store/hooks/useActionCreator';
import { userActions } from '@store/slices/user';
import { getRandomLocation } from '@utils/offer';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {login} = useActionCreators(userActions)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  }

  const randomLocation = useMemo(() => getRandomLocation(LOCATIONS), [])

  let correctForm = false;
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

  if (!(re.test(formData.email)) || formData.password.length < 2) {
    correctForm = false;
  } else {
    correctForm = true;
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (correctForm === false) {
        return toast.error(textError.textErrorCorrectValidationForm);
      }

    login(formData);
  }
  return (
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" noValidate onSubmit={handleSubmit}>
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
                minLength={2}
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
        <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={{pathname: '/', search: `?city=${randomLocation}`}}>
                <span>{randomLocation}</span>
              </Link>
            </div>
          </section>
      </div>
  );
}
export default LoginPage;
