import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Ul = styled.ul`
	display: ${(props) => (props.block ? 'block' : 'flex')};
	list-style: none;
`;
