import React from 'react'
import { Form, Message, Segment } from 'semantic-ui-react'


const WorkOrder = () => (
  <div classnName='work-order'>
 <Segment>
  <Form>
  <Message info>
    <Message.Header>Was this what you wanted?</Message.Header>
    <p>Did you know it's been a while?</p>
  </Message>

    <Form.Group widths='equal'>      
      <Form.Field>
      <label>Year</label>
      <input placeholder='Year' />
    </Form.Field>
    <Form.Field>
      <label>Make</label>
      <input placeholder='Make' />
    </Form.Field>
    <Form.Field>
      <label>Model</label>
      <input placeholder='Model' />
    </Form.Field>
    <Form.Field>
      <label>Mileage</label>
      <input placeholder='Mileage' />
    </Form.Field>
      <Form.Field label='Transmission' control='select'>
        <option value='Auto'>Automatic</option>
        <option value='Manual'>Manual</option>
      </Form.Field>
    </Form.Group>
    {/* <Form.Group grouped>
      <label>HTML radios</label>
      <Form.Field label='This one' control='input' type='radio' name='htmlRadios' />
      <Form.Field label='That one' control='input' type='radio' name='htmlRadios' />
    </Form.Group> */}
    <Form.Group grouped>
      <label>Select Services</label>
      <Form.Field label='Brake Concern' control='input' type='checkbox' />
      <Form.Field label='Climate Control' control='input' type='checkbox' />
      <Form.Field label='Electrical' control='input' type='checkbox' />
      <Form.Field label='Engine Perf Concern' control='input' type='checkbox' />
      <Form.Field label='Smog Inspection' control='input' type='checkbox' />
      <Form.Field label='Suspension Concern' control='input' type='checkbox' />
      <Form.Field label='Body Work/Trim' control='input' type='checkbox' />
    </Form.Group>
    <Form.Field label='Notes' control='textarea' rows='3' />
    <Form.Field label='Find me a mechanic named Charlie' control='button'>
      Submit
    </Form.Field>
  </Form>
  </Segment>
  </div>
)

export default WorkOrder
