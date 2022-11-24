import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Will work on</label>
                    <TaskInput
                        id="task"
                        placeholder="Give a name for your project"
                    />
                    <datalist id="task-suggestions">
                        <option value="1" />
                        <option value="2" />
                        <option value="3" />
                    </datalist>

                    <label htmlFor="minutesAmount">for</label>
                    <MinuteAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutes.</span>
                </FormContainer>


                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled type="submit">
                    <Play size={24} />
                    Begin
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}