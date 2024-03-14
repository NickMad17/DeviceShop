import React, { useState } from "react";
import { Button, Form, type FormProps, Input, message } from "antd";
import { LockFilled, UserAddOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";
import { Paths } from "@/app/providers/routerProvider";
import { login, registration, User } from "@/features/User";
import { PageLoader } from "@/shared";
import { observer } from "mobx-react-lite";
import { useAuth } from "@/app/providers/AuthProvider";

interface Props {
  className: string;
}

type FieldType = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  "confirm password"?: string;
};

export const AuthForm: React.FC<Props> = observer(({ className }) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [regMode, setRegMode] = useState<boolean>(false);

  const success = (text: string = "аунтификация пройдна") => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const error = (text: string = "Ошибка формы") => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    error("Пожалуйста, исправьте ошибки ");
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (regMode && values.first_name && values.last_name) {
      registration(
        values.email,
        values.password,
        values.first_name,
        values.last_name
      ).then(() => {
        if (User.error) {
          error(User.error);
        } else {
          auth?.setSession(User.data);
          success();
          setTimeout(() => {
            navigate(Paths.HOME);
          }, 500);
        }
      });
    } else {
      login(values.email, values.password).then(() => {
        console.log(User);
        if (User.error) {
          error(User.error);
        } else {
          auth?.setSession(User.data);
          success();
          setTimeout(() => {
            navigate(Paths.HOME);
          }, 500);
        }
      });
    }
  };

  return (
    <>
      {contextHolder}
      <h2 className="text-center text-[25px] font-medium mt-[6vh]">
        {regMode ? "Sign Up" : "Sign In"}
      </h2>
      {User.loading && <PageLoader />}
      <Form
        className={User.loading ? "hidden" : className}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          hasFeedback
          className="pb-3"
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите почту!",
            },
            {
              type: "email",
              message: "Пожалуйста укажите действительную почту",
            },
          ]}
        >
          <Input placeholder="email" prefix={<UserAddOutlined />} />
        </Form.Item>

        {regMode && (
          <>
            <Form.Item<FieldType>
              hasFeedback
              className="pb-3"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите имя!",
                },
              ]}
            >
              <Input placeholder="name" />
            </Form.Item>

            <Form.Item<FieldType>
              hasFeedback
              className="pb-3"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста введите фамилию!",
                },
              ]}
            >
              <Input placeholder="first name" />
            </Form.Item>
          </>
        )}

        <Form.Item<FieldType>
          hasFeedback
          className="pb-3"
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите пароль!",
            },
            {
              min: 6,
              message: "Минимальное количество символов 6",
            },
          ]}
        >
          <Input.Password placeholder="password" prefix={<LockFilled />} />
        </Form.Item>

        {regMode && (
          <Form.Item<FieldType>
            hasFeedback
            className="pb-3"
            name="confirm password"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") == value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Пароли не совпадают");
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="confirm password"
              prefix={<LockFilled />}
            />
          </Form.Item>
        )}

        <Form.Item>
          <Link type="secondary" onClick={() => setRegMode(!regMode)}>
            {regMode ? "Хотите войти ?" : "Еще не зарегестрированны ?"}
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            block
            className="bg-primary grow-1 "
            size="large"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
});
