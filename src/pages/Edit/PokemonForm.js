import React from 'react';
import * as yup from 'yup';
import { Formik, getIn } from 'formik';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const PokemonForm = ({ data, onSubmit, children }) => {
  const schema = yup.object().shape({
    name: yup.string().max(255, 'Too long').required(),
    classification: yup.string().max(255, 'Too long').required(),
    weight: yup.object().shape({
      minimum: yup.number().required(),
      maximum: yup.number().required(),
    }),
    height: yup.object().shape({
      minimum: yup.number().required(),
      maximum: yup.number().required(),
    }),
    fleeRate: yup.number().required(),
    maxCP: yup.number().required(),
    maxHP: yup.number().required(),
    image: yup.string().required()
  });

  return (
    <Formik enableReinitialize validationSchema={schema} onSubmit={onSubmit} initialValues={data} >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Row sm={12}><h3>General</h3></Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="nameControl">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={values.name} onChange={handleChange} isInvalid={!!errors.name} isValid={touched.name && !errors.name} />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="classificationControl">
              <Form.Label>Classification</Form.Label>
              <Form.Control type="text" name="classification" value={values.classification} onChange={handleChange} isValid={touched.classification && !errors.classification} isInvalid={!!errors.classification} />
              <Form.Control.Feedback type="invalid">{errors.classification}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <br />

          <Form.Row sm={12}><h3>Dimensions</h3></Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="minimunWeightControl">
              <Form.Label>Minimum Weight</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>kg</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className='rounded-right' type="number" name="weight.maximum" value={values.weight.maximum} onChange={handleChange} isValid={getIn(touched, 'weight.maximum') && !getIn(errors, 'weight.maximum')} isInvalid={getIn(errors, 'weight.maximum')} />
                <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="maximumWeightControl">
              <Form.Label>Maximum Weight</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>kg</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className='rounded-right' type="number" name="weight.minimum" value={values.weight.minimum} onChange={handleChange} isValid={getIn(touched, 'weight.minimum') && !getIn(errors, 'weight.minimum')} isInvalid={getIn(errors, 'weight.minimum')} />
                <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="minimunHeightControl">
              <Form.Label>Minimum Height</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>m</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className='rounded-right' type="number" name="height.maximum" value={values.height.maximum} onChange={handleChange} isValid={getIn(touched, 'height.maximum') && !getIn(errors, 'height.maximum')} isInvalid={getIn(errors, 'height.maximum')} />
                <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="maximumHeightControl">
              <Form.Label>Maximum Height</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>m</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control className='rounded-right' type="number" name="height.minimum" value={values.height.minimum} onChange={handleChange} isValid={getIn(touched, 'height.minimum') && !getIn(errors, 'height.minimum')} isInvalid={getIn(errors, 'height.minimum')} />
                <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <br />

          <Form.Row sm={12}><h3>Informations</h3></Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="fleeRateControl">
              <Form.Label>Flee Rate</Form.Label>
              <Form.Control type="number" name="fleeRate" value={values.fleeRate} onChange={handleChange} isValid={touched.fleeRate && !errors.fleeRate} isInvalid={!!errors.fleeRate} />
              <Form.Control.Feedback type="invalid">{errors.fleeRate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="maxCPControl">
              <Form.Label>Maximum CP</Form.Label>
              <Form.Control type="number" name="maxCP" value={values.maxCP} onChange={handleChange} isValid={touched.maxCP && !errors.maxCP} isInvalid={!!errors.maxCP} />
              <Form.Control.Feedback type="invalid">{errors.maxCP}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="maxHPControl">
              <Form.Label>Maximum HP</Form.Label>
              <Form.Control type="number" name="maxHP" value={values.maxHP} onChange={handleChange} isValid={touched.maxHP && !errors.maxHP} isInvalid={!!errors.maxHP} />
              <Form.Control.Feedback type="invalid">{errors.maxHP}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {children}
        </Form>
      )}
    </Formik >
  );
}

export default PokemonForm;
