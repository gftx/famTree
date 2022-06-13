--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3 (Ubuntu 14.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-06-13 18:46:27 MSK

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 20043352)
-- Name: person; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.person (
    id integer DEFAULT nextval('public.person_seq'::regclass),
    name character varying(32) NOT NULL,
    surname character varying(32) NOT NULL,
    birthdate character varying(32) NOT NULL,
    image character varying(150),
    father_id character varying(32),
    mother_id character varying(32),
    brothers character varying(45),
    sisters character varying(45),
    children character varying(45),
    create_time timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 211 (class 1259 OID 20043359)
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."user" (
    username character varying(16) NOT NULL,
    password character varying(32) NOT NULL,
    create_time timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- TOC entry 4300 (class 0 OID 20043352)
-- Dependencies: 210
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.person VALUES (80, 'Anton', 'Ivanov', '25.05.2000', 'uploads/1655134734487-9xl5afJCqqs.jpg', 'null', 'null', 'null', 'null', 'null', '2022-06-13 15:38:55');
INSERT INTO public.person VALUES (81, 'Rodion', 'Dubanov', '24.09.2000', 'uploads/1655134841158-bagz-banni-udivlennyj-mem.jpg', 'null', 'null', 'null', 'null', 'null', '2022-06-13 15:40:42');


--
-- TOC entry 4301 (class 0 OID 20043359)
-- Dependencies: 211
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 4160 (class 2606 OID 20043358)
-- Name: person id_unique; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT id_unique UNIQUE (id);


-- Completed on 2022-06-13 18:46:33 MSK

--
-- PostgreSQL database dump complete
--

