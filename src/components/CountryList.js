import React from 'react'
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Country from './Country';

const CountryList = ({ countries=[], onRemove=f=>f }) =>
    <div className="country-list">
        {/* {(countries.length === 0) ?
            <p>No Countries Listed. (Add a Country)</p> :
            countries.map(country =>
                <Country key={country.alpha3Code}
                    {...country}
                       onRemove={() => onRemove(country.alpha3Code)} />
            )
        } */}
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                <th>Name</th>
                <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(country => <tr><td>{country.name}</td><td>{country.capital}</td></tr>)}
            </tbody>
        </Table>
    </div>

CountryList.propTypes = {
    countries: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default CountryList;
