import { useState } from "react";

import styles from "../ModalCreateTask/ModalCreateTask.module.css";

export default function ModalCreateTask({ isOpen, onClose, onCreateTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    weight: "3",
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Сбрасываем ошибку при изменении
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация
    const newErrors = {
      title: formData.title.trim() === "",
      description: formData.description.trim() === "",
    };

    setErrors(newErrors);

    if (!newErrors.title && !newErrors.description) {
      onCreateTask({
        ...formData,
        weight: parseInt(formData.weight),
      });
      onClose();
    }
  };

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div className={`${styles.ModalBackground}`} onClick={handleBackDropClick}>
      <div className={`${styles.ModalCreateTask}`}>
        <h2 className={styles.modalTitle}>Создать новую задачу</h2>

        <form onSubmit={handleSubmit} className={styles.taskForm}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Название задачи*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? styles.errorInput : ""}
              placeholder="Введите название"
            />
            {errors.title && (
              <span className={styles.errorText}>Это поле обязательно</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Описание*</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? styles.errorInput : ""}
              rows="4"
              placeholder="Подробное описание задачи"
            />
            {errors.description && (
              <span className={styles.errorText}>Это поле обязательно</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="weight">Приоритет</label>
            <select
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            >
              <option value="1">Низкий</option>
              <option value="3">Средний</option>
              <option value="5">Высокий</option>
            </select>
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              Отмена
            </button>
            <button type="submit" className={styles.submitButton}>
              Создать задачу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
