import { ItemDirective, ItemsDirective, TimelineComponent } from '@syncfusion/ej2-react-layouts';
import './App.css';

function App() {
  return (
    <div className="App">
      <TimelineComponent orientation='Vertical' align='Alternate'
      reverse={true}
      >
        <ItemsDirective>
          <ItemDirective content='Ordered' oppositeContent='09:15 AM, January 1, 2024'
          dotCss='state-success' cssClass='completed'></ItemDirective>
          <ItemDirective content='Shipped' oppositeContent='12:20 PM, January 4, 2024'
          dotCss='state-success' cssClass='completed'></ItemDirective>
          <ItemDirective content='Out for delivery' oppositeContent='07:00 AM, January 8, 2024'
          dotCss='state-progress' cssClass='intermediate'></ItemDirective>
          <ItemDirective content='Delivered' oppositeContent='Estimated delivery by 09:20 AM'
          disabled={true}
          ></ItemDirective>
        </ItemsDirective>
      </TimelineComponent>
    </div>
  );
}

export default App;
