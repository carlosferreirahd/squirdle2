import { Routes as Switch, Route } from 'react-router-dom';
import { Filters, Game } from '@pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/filters" element={<Filters />} />
      <Route index path="*" element={<Game />} />
    </Switch>
  );
}
