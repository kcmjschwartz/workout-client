import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    return (
        <>
        <h3>Log a Workout</h3>
        <Form>
            <FormGroup>
                <Label htmlFor="description" />
                <Input name="description" value = {description}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="definition" />
                <Input type="select" name="definition" value={definition}>
                    <option value = "Time">Time</option>
                    <option value = "Weight">Weight</option>
                    <option value = "Distance">Distance</option>
                </Input>
            </FormGroup>
            <FormGroup>
            <Label htmlFor="result" />
            <Input name="result" value = {result}/>
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
        </Form>

        </>
    )
}

export default WorkoutCreate;