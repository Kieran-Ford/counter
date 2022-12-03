// import necessary react testing library helpers here
// import the Counter component here
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    //const { getByTestId } = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    //const component = render(<Counter />);
    const { getByTestId } = render(<Counter />);
    const countMessage = getByTestId("Counter");
    expect(countMessage.textContent).toBe("Counter");
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    //const component = render(<Counter />);
    const { getByTestId } = render(<Counter />);
    const initialCount = getByTestId("count");
    expect(initialCount.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    //const component = render(<Counter />);
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("addBtn");
    const countEl = getByTestId("count");
    expect(countEl.textContent).toBe("0");
    fireEvent.click(addBtn);
    expect(countEl.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    //const component = render(<Counter />);
    //const subBtn = component.getByRole('button', { name: '-' })
    const { getByTestId } = render(<Counter />);
    const subBtn = getByTestId("subBtn");
    const countEl = getByTestId("count");
    expect(countEl.textContent).toBe("0");
    fireEvent.click(subBtn);
    expect(countEl.textContent).toBe("-1");
});
