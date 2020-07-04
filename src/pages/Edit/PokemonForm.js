import React from 'react';
import { Formik, getIn } from 'formik';
import * as yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const PokemonForm = ({ data }) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    classification: yup.string().required(),
    weight: yup.object().shape({
      minimum: yup.string().max(5, 'Too long').required(),
      maximum: yup.string().max(5, 'Too long').required(),
    }),
    height: yup.object().shape({
      minimum: yup.string().max(5, 'Too long').required(),
      maximum: yup.string().max(5, 'Too long').required(),
    }),
    fleeRate: yup.string().max(4, 'Too long').required(),
    maxCP: yup.string().max(4, 'Too long').required(),
    maxHP: yup.string().max(4, 'Too long').required(),
    image: yup.string().required()
  });

  return (
    <Formik validationSchema={schema} onSubmit={console.log} initialValues={data}>
      {({ handleSubmit, handleChange, isSubmitting, values, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
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

          <Form.Row>
            <Form.Group as={Col} md="3" controlId="minimunWeightControl">
              <Form.Label>Minimum Weight</Form.Label>
              <Form.Control type="string" name="weight.maximum" value={values.weight.maximum} onChange={handleChange} isValid={getIn(touched, 'weight.maximum') && !getIn(errors, 'weight.maximum')} isInvalid={getIn(errors, 'weight.maximum')} />
              <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="maximumWeightControl">
              <Form.Label>Maximum Weight</Form.Label>
              <Form.Control type="string" name="weight.minimum" value={values.weight.minimum} onChange={handleChange} isValid={getIn(touched, 'weight.minimum') && !getIn(errors, 'weight.minimum')} isInvalid={getIn(errors, 'weight.minimum')} />
              <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="minimunHeightControl">
              <Form.Label>Minimum Height</Form.Label>
              <Form.Control type="string" name="height.maximum" value={values.height.maximum} onChange={handleChange} isValid={getIn(touched, 'height.maximum') && !getIn(errors, 'height.maximum')} isInvalid={getIn(errors, 'height.maximum')} />
              <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="maximumHeightControl">
              <Form.Label>Maximum Height</Form.Label>
              <Form.Control type="string" name="height.minimum" value={values.height.minimum} onChange={handleChange} isValid={getIn(touched, 'height.minimum') && !getIn(errors, 'height.minimum')} isInvalid={getIn(errors, 'height.minimum')} />
              <Form.Control.Feedback type="invalid">Required</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="fleeRateControl">
              <Form.Label>Flee Rate</Form.Label>
              <Form.Control type="string" name="fleeRate" value={values.fleeRate} onChange={handleChange} isValid={touched.fleeRate && !errors.fleeRate} isInvalid={!!errors.fleeRate} />
              <Form.Control.Feedback type="invalid">{errors.fleeRate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="maxCPControl">
              <Form.Label>Maximum CP</Form.Label>
              <Form.Control type="string" name="maxCP" value={values.maxCP} onChange={handleChange} isValid={touched.maxCP && !errors.maxCP} isInvalid={!!errors.maxCP} />
              <Form.Control.Feedback type="invalid">{errors.maxCP}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="maxHPControl">
              <Form.Label>Maximum HP</Form.Label>
              <Form.Control type="string" name="maxHP" value={values.maxHP} onChange={handleChange} isValid={touched.maxHP && !errors.maxHP} isInvalid={!!errors.maxHP} />
              <Form.Control.Feedback type="invalid">{errors.maxHP}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button type="submit" disabled={isSubmitting}>Save</Button>
        </Form>
      )}
    </Formik>
  );
}

export default PokemonForm;
