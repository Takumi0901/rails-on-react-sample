// @flow
import React from "react"
import Card from 'material-ui/Card/Card'
import CardTitle from 'material-ui/Card/CardTitle'
import UpdateBookFields from '../molecules/UpdateBookFields'
import { Form, Field } from 'react-final-form'
import UpdateBookActions from '../molecules/UpdateBookActions'


type Props = {
  card: Object,
  onSubmit: Object,
  onDelete: Object,
  bookItem: any
}

const UpdateBookContent = ({card, onSubmit, onDelete, bookItem}: Props) => {
  const initialValues = {
    name: bookItem && bookItem.name,
    about: bookItem && bookItem.about
  }
  return (
    <Card>
      <CardTitle title={card.title} subtitle={card.subtitle}/>
      <Form
        initialValues={bookItem && initialValues}
        onSubmit={onSubmit.method}
        render={({ handleSubmit, pristine, invalid }) => (
          <form>
            <UpdateBookFields/>
            <UpdateBookActions onSubmit={onSubmit} onDelete={onDelete} handleSubmit={handleSubmit}/>
          </form>
        )}
      />
    </Card>
  )
}

export default UpdateBookContent