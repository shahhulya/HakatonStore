import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../../Layouts/MainLayout';
import * as Yup from 'yup';
import { Button, TextField, Typography } from '@material-ui/core';
import classes from './productUpdate.module.css';
import TextError from '../../components/TextError';
import { storeContext } from '../../contexts/StoreContext';
import { notifySuccess } from '../../helpers/notifiers';
import { useHistory, useParams } from 'react-router';

export default function ProductUpdatePage() {
  const [initialValues, setInitialValues] = useState({
    title: '',
    price: '',
    description: '',
    images: '',
    year: '',
    engine: '',
    brand: '',
  });

  const { id } = useParams();

  const { fetchProductDetail, productDetail, updateProduct } =
    useContext(storeContext);

  useEffect(() => {
    fetchProductDetail(id);
  }, []);

  useEffect(() => {
    if (productDetail) {
      setInitialValues({
        ...productDetail,
        images: productDetail.images[0],
      });
    }
  }, [productDetail]);

  const history = useHistory();

  const validationSchema = Yup.object({
    title: Yup.string().required('Обязательное поле!'),
    engine: Yup.number()
      .typeError('Введите число!')
      .required('Обязательное поле!'),
    year: Yup.number()
      .typeError('Введите число!')
      .required('Обязательное поле!'),
    brand: Yup.number()
      .typeError('Введите число!')
      .required('Обязательное поле!'),
    price: Yup.number()
      .typeError('Введите число!')
      .required('Обязательное поле!'),
    description: Yup.string().required('Обязательное поле!'),
    images: Yup.string().required('Обязательное поле!'),
  });

  const onSubmit = (values) => {
    updateProduct(id, {
      ...values,
      images: [values.images],
    }).then(() => {
      notifySuccess('Авто был изменен!');
      history.push(`/products/${id}`);
    });
  };

  return (
    <MainLayout>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {({ }) => (
            <Form className={classes.form}>
              <Typography variant="h4">Изменить данные Авто</Typography>
              <label>Модель</label>
              <Field
                className={classes.input}
                name="title"
                variant="outlined"
                as={TextField}
              />

              <ErrorMessage component={TextError} name="title" />

              <label>Год выпуска</label>
              <Field
                className={classes.input}
                name="year"
                variant="outlined"
                as={TextField}
              />

              <ErrorMessage component={TextError} name="year" />

              <label>Объем</label>
              <Field
                className={classes.input}
                name="engine"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="engine" />

              <label>Категория</label>
              <Field
                className={classes.input}
                name="brand"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="brand" />

              <label>Цена</label>
              <Field
                className={classes.input}
                name="price"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="price" />

              <label>Объем</label>
              <Field
                className={classes.input}
                name="engine"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="engine" />

              <label>Описание</label>
              <Field
                variant="outlined"
                className={classes.input}
                rows={8}
                multiline
                name="description"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="description" />

              <label>Фото</label>
              <Field
                className={classes.input}
                name="images"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="images" />

              <Button type="submit" color="primary" variant="contained">
                Изменить
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout>
  );
}
