import React from 'react'
import Modal from '../primitives/Modal'
import Button from '../primitives/Button'
import  { withTheme } from 'styled-components'
import { FormProvider, useForm } from "react-hook-form"
import {
  StyledContainer,
  FormContainer
} from './styled'

const GameModal = ({ isOpen, onClose, difficulty, theme, setDifficulty }) => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            difficulty
        }
      })
      const onSubmit = data => {
          setDifficulty(data.difficulty)
          onClose()
      };
    return(
        <Modal isOpen={isOpen} onClose={onClose} size="small">
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
                            <Button 
                                variant="primary" 
                                color="primary" 
                                fontSize={theme.fontSize.big}
                                fluid 
                                circular 
                                button
                                >
                                Create
                            </Button>
                            {/* <button type="submit">Create</button> */}
                        </form>
                    </FormProvider>
                </FormContainer>
            </StyledContainer>
        </Modal>
    )
}
export default withTheme(GameModal)
