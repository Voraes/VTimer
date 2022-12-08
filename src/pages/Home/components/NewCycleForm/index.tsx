import { FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { useForm, useFormContext } from 'react-hook-form';
import { CyclesContext } from '../..';
import { useContext } from 'react';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>Will work on</label>
      <TaskInput
        id='task'
        list='task-suggestions'
        placeholder='Give a name for your project'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='task-suggestions'>
        <option value='Project 1' />
        <option value='Project 2' />
        <option value='Project 3' />
      </datalist>

      <label htmlFor='minutesAmount'>for</label>
      <MinutesAmountInput
        type='number'
        id='minutesAmount'
        placeholder='00'
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  );
}
