import './App.css';
import Box from '@mui/material/Box';

import Header from './components/Header/Header';
import Field from './components/Field/Field';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          width: '500px',
          // height: 300,
          // backgroundColor: 'primary.dark',
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
        }}

        display="flex"
        flexDirection="column"
      >
        <Header />
        <Field />
        <TodoList />
        <Filters />
      </Box>
    </div>
  );
}

export default App;
