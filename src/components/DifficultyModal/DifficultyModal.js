import React from 'react'
import Modal from '../primitives/Modal'
import { FormProvider, useForm } from "react-hook-form"
import {
  StyledContainer,
  FormContainer
} from './styled'

const GameModal = ({ isOpen, onClose, difficulty }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            difficulty
        }
      })
      const onSubmit = data => {
        console.log(data);
      };
    return(
        <Modal isOpen={isOpen} onClose={onClose} size="medium">
            <StyledContainer>
                <h1 style={{fontSize: '2.4rem', textAlign: 'center'}}>Choose Difficulty</h1>
                <FormContainer>
                    <FormProvider>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="radio" name="difficulty" defaultValue="Easy" ref={register} />
                                <label>Easy</label>
                            </div>
                            <div>
                                <input type="radio" name="difficulty" defaultValue="Medium" ref={register} />
                                <label>Medium</label>
                            </div>
                            <div>
                                <input type="radio" name="difficulty" defaultValue="Hard" ref={register} />
                                <label>Hard</label>
                            </div>
                            <button type="submit">Create</button>
                        </form>
                    </FormProvider>
                </FormContainer>
            </StyledContainer>
        </Modal>
    )
}
export default GameModal
