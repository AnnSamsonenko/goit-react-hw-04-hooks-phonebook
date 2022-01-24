import { Component } from "react";
import { SearchInput, FilterWrapper } from "./FilterStyled";
import { LabelStyled } from "components/ContactForm/ContactFormStyled";
import propTypes from "prop-types";

export class Filter extends Component {
  handleChange = ({ target: { value } }) => {
    this.props.onChange(value);
  };

  render() {
    return (
      <FilterWrapper>
        <LabelStyled htmlFor="filter">Find contacts by name</LabelStyled>
        <div>
          <SearchInput name="filter" type="text" onChange={this.handleChange} />
        </div>
      </FilterWrapper>
    );
  }
}

Filter.propTypes = {
  onChange: propTypes.func.isRequired,
};
