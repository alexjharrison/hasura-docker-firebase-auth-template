SET check_function_bodies = false;
INSERT INTO public.user_roles (id, name) VALUES ('user', 'user');
INSERT INTO public.user_roles (id, name) VALUES ('admin', 'admin');
INSERT INTO public.users (id, created_at, updated_at, username, email, display_name, user_role_id) VALUES ('234', '2021-06-23 20:11:09.68151+00', '2021-06-23 20:11:09.68151+00', 'alexmon32', 'alexmon32@live.com', 'alex', NULL);
