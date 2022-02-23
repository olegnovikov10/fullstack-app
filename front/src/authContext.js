import { createContext } from 'react';

const authContext = createContext(
	{
		isLog: false,
	}
);

export default authContext;