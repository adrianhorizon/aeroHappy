import React from 'react';
import { withNamespaces } from 'react-i18next';
import '../assets/styles/components/SearchForm.scss';

const SearchForm = (props) => {
  return (
    <div>
      <form className="container-search-form" onSubmit={props.onSubmit}>
        <div>
          <label>{props.t('FORM.ORIGIN')}</label>
          <input
            placeholder={props.t('FORM.PLACEHOLDER.ORIGIN')}
            onChange={props.onChange}
            className="container-input"
            type="text"
            name="origin"
            value={props.formValues.origin}
          />
        </div>

        <div>
          <label>{props.t('FORM.DESTINATION')}</label>
          <input
            placeholder={props.t('FORM.PLACEHOLDER.ORIGIN')}
            onChange={props.onChange}
            className="container-input"
            type="text"
            name="destination"
            value={props.formValues.destination}
          />
        </div>

        <div>
          <label>{props.t('FORM.DATES')}</label>
          <input
            placeholder={props.t('FORM.PLACEHOLDER.GOING')}
            onChange={props.onChange}
            className="container-input"
            type="text"
            name="date"
            value={props.formValues.date}
          />
        </div>

        <div>
          <br />
          <input
            placeholder={props.t('FORM.PLACEHOLDER.RETURN')}
            onChange={props.onChange}
            className="container-input"
            type="text"
            name="dateLast"
            value={props.formValues.dateLast}
            disabled={props.disabledButton === '2'}
          />
        </div>

        <div>
          <label>{props.t('FORM.PEOPLE_CLASS')}</label>
          <input
            placeholder={props.t('FORM.PLACEHOLDER.PEOPLE')}
            onChange={props.onChange}
            className="container-input"
            type="text"
            name="people"
            value={props.formValues.people}
          />
        </div>

        <div>
          <button type="submit" className="button-search">{props.t('FORM.SEARCH')}</button>
        </div>
      </form>
    </div>
  );
};

export default (withNamespaces()(SearchForm));
