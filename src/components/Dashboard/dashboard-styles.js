import {styled} from "@mui/material";

export const InnerText = styled('div')`
	display: inline-block;
	border-bottom: ${({border}) => border ? '1px solid rgba(0, 0, 0, 0.23)' : 'none' };
  color: ${props => props.color ? props.color : '#305165'};
`;

export const Container = styled('div')`
	padding: 1rem;
	display: flex;
	background: rgb(83,190,166);
	background: linear-gradient(90deg, rgba(83,190,166,1) 10%, rgba(223,144,15,1) 56%, rgba(158,39,145,1) 100%);
	min-height: ${props => props.hasOwnProperty('dimensions') ? props.dimensions.height + 'px' : undefined};
	min-width: ${props => props.hasOwnProperty('dimensions') ? props.dimensions.width + 'px' : undefined};
	${props => typeof props.style === 'object' ? {...props.style} : props.style}
`

export const Label = styled('label')`
	font-size: 0.75rem;
	margin-bottom: 3px;
	display: inline-block;
	margin-right: ${props => props.inline ? '1rem' : 0};
	& p {
		color: ${props => props.labelColor ? props.labelColor : ''};
	}
`;
