import { Button, Checkbox, Form, Input } from 'antd';

import styles from './FormRecord.module.scss';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const FormRecord = () => {
    return (
        <div className={styles.containerForm}>
            <p className={styles.titleMain}>
                Оставь заявку на бесплатную консультацию + диагностику
            </p>

            <Form
                className={styles.form}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    name="surname"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите вашу фамилию!',
                    },
                    ]}
                >
                    <Input className={styles.input} placeholder="Фамилия"/>
                </Form.Item>

                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите вашу фамилию!',
                    },
                    ]}
                >
                    <Input className={styles.input} placeholder="Имя"/>
                </Form.Item>

                <Form.Item
                    name="email"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваш email!',
                    },
                    ]}
                >
                    <Input className={styles.input} placeholder="Email"/>
                </Form.Item>

                <Form.Item
                    name="number"
                    rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите ваш номер телефона!',
                    },
                    ]}
                >
                    <Input className={styles.input} placeholder="Телефон"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.btn}>
                        Отправить заявку
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}

export default FormRecord;