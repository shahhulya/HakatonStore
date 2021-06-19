import { IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import Loader from '../../components/Loader';
import { storeContext } from '../../contexts/StoreContext';
import MainLayout from '../../Layouts/MainLayout';
import ProductSlider from './components/ProductSlider';
import classes from './productDetail.module.css';
import DeleteButton from '@material-ui/icons/Delete';
import EditButton from '@material-ui/icons/Edit';
import { useConfirm } from 'material-ui-confirm';
import { notifySuccess } from '../../helpers/notifiers';
import { Fab } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function ProductDetailPage() {
  const { fetchProductDetail, productDetail, deleteProduct } =
    useContext(storeContext);

  const { id } = useParams();
  const confirm = useConfirm();
  const history = useHistory();

  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  const handleProductDelete = () => {
    confirm({
      description: 'Удалить данный авто?',
    }).then(() => {
      deleteProduct(id).then(() => {
        notifySuccess('Авто был успешно удален!');
        history.push('/');
      });
    });
  };

  return (
    <MainLayout>
      {productDetail ? (
        <div className={classes.container}>
          <ProductSlider images={productDetail.images} />

          <div className={classes.icon}>
            <Button onClick={handleProductDelete}>
              <DeleteButton />
            </Button>

            <Button onClick={() => history.push(`/products/${id}/update`)}>
              <EditButton />
            </Button>
          </div>

          <Typography variant="h5">Модель - {productDetail.title}</Typography>
          <Typography variant="h5">Год - {productDetail.year}</Typography>
          <Typography variant="h5">Объем - {productDetail.engine}</Typography>
          <Typography variant="h5">Категория - {productDetail.brand}</Typography>
          <Typography variant="h5">Цена - {productDetail.price} $</Typography>
          <Typography variant="body1">{productDetail.description}</Typography>
        </div>
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
}
