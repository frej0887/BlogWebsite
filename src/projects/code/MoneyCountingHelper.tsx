import {type TenderState} from "./moneyCountingHelper/types.tsx";
import {useStatusHandler} from "./moneyCountingHelper/hooks.tsx";
import './moneyCountingHelper/styles.sass';
import {useContext} from "react";
import {LayoutContext} from "../../contexts.tsx";

const MoneyRow = ({state, setState}: TenderState) =>
  <tr>
    <td>{state.name}</td>
    <td>
      <button onClick={() => state.count > 0 ? setState(state.count-1): undefined}>-</button>
      <input
        value={state.count}
        defaultValue={0}
        onInput={(e) =>
          setState(parseInt((e.target as HTMLInputElement).value) ? parseInt((e.target as HTMLInputElement).value) : 0)}
      />
      <button onClick={() => setState(state.count+1)}>+</button>
    </td>
    <td>{state.value*state.count}</td>
  </tr>

export const MoneyCountingHelper = () => {
  const {values, sum, reset} = useStatusHandler()
  const theme = useContext(LayoutContext);
  return (
    <div className={theme.is_mobile ? 'mobile' : 'desktop'}>
    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Count</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {values.map(({state, setState}) => <MoneyRow state={state} setState={setState}/>)}
        <tr>
          <th>Sum</th>
          <th></th>
          <th>{sum}</th>
        </tr>
      </tbody>
    </table>
    <button onClick={reset}>Reset</button>
    </div>
  )
}
