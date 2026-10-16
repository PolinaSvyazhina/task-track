import { Task } from '../components/task/interfaces/task.interface';

export const tasks: Task[] = [
    {
        "id":  "task-001",
        "projectId":  "task-tracker",
        "title":  "Сверстать список задач",
        "description":  "Добавить карточки задач и адаптивную сетку для компьютеров и телефонов.",
        "status":  "done",
        "priority":  "high",
        "assigneeId":  "user-001",
        "dueDate":  "2026-10-12",
        "subtasks":  [
                         "Создать карточку задачи",
                         "Настроить сетку",
                         "Добавить пустое состояние"
                     ]
    },
    {
        "id":  "task-002",
        "projectId":  "task-tracker",
        "title":  "Добавить сводку по задачам",
        "description":  "Показывать общее количество задач и число незавершённых задач.",
        "status":  "done",
        "priority":  "normal",
        "assigneeId":  "user-002",
        "dueDate":  "2026-10-14",
        "subtasks":  [
                         "Подключить счётчики",
                         "Оформить блок сводки"
                     ]
    },
    {
        "id":  "task-003",
        "projectId":  "task-tracker",
        "title":  "Реализовать создание задачи",
        "description":  "Подготовить форму с названием, описанием, приоритетом и сроком выполнения.",
        "status":  "in-progress",
        "priority":  "high",
        "assigneeId":  "user-001",
        "dueDate":  "2026-10-16",
        "subtasks":  [
                         "Добавить поля формы",
                         "Настроить валидацию",
                         "Сохранить новую задачу"
                     ]
    },
    {
        "id":  "task-004",
        "projectId":  "task-tracker",
        "title":  "Добавить фильтрацию по статусу",
        "description":  "Позволить выбирать задачи к выполнению, в работе и завершённые.",
        "status":  "todo",
        "priority":  "normal",
        "assigneeId":  "user-003",
        "dueDate":  "2026-10-19",
        "subtasks":  [
                         "Добавить выбор статуса",
                         "Применить фильтр к списку"
                     ]
    },
    {
        "id":  "task-005",
        "projectId":  "task-tracker",
        "title":  "Реализовать поиск задач",
        "description":  "Добавить поиск по названию и описанию без учёта регистра.",
        "status":  "todo",
        "priority":  "normal",
        "assigneeId":  null,
        "dueDate":  "2026-10-20",
        "subtasks":  [
                         "Добавить поле поиска",
                         "Показать сообщение при отсутствии результатов"
                     ]
    },
    {
        "id":  "task-006",
        "projectId":  "task-tracker",
        "title":  "Настроить удаление задачи",
        "description":  "Удалять выбранную задачу из общего состояния и обновлять сводку.",
        "status":  "in-progress",
        "priority":  "high",
        "assigneeId":  "user-002",
        "dueDate":  "2026-10-16",
        "subtasks":  [
                         "Добавить кнопку удаления",
                         "Обновить состояние списка"
                     ]
    },
    {
        "id":  "task-007",
        "projectId":  "task-tracker",
        "title":  "Добавить назначение исполнителя",
        "description":  "Позволить назначать участника команды и снимать назначение.",
        "status":  "todo",
        "priority":  "low",
        "assigneeId":  "user-003",
        "dueDate":  "2026-10-23",
        "subtasks":  [
                         "Добавить список исполнителей",
                         "Сохранить выбранного участника"
                     ]
    },
    {
        "id":  "task-008",
        "projectId":  "task-tracker",
        "title":  "Оформить страницу задачи",
        "description":  "Показать полное описание, срок, исполнителя и элементы смены статуса.",
        "status":  "done",
        "priority":  "normal",
        "assigneeId":  "user-001",
        "dueDate":  "2026-10-13",
        "subtasks":  [
                         "Добавить маршрут по идентификатору",
                         "Оформить состояние отсутствующей задачи"
                     ]
    },
    {
        "id":  "task-009",
        "projectId":  "task-tracker",
        "title":  "Подготовить справку для команды",
        "description":  "Описать создание задач, назначение исполнителей и смену статусов.",
        "status":  "todo",
        "priority":  "low",
        "assigneeId":  null,
        "dueDate":  null,
        "subtasks":  [

                     ]
    },
    {
        "id":  "task-010",
        "projectId":  "task-tracker",
        "title":  "Добавить сортировку по сроку",
        "description":  "Показывать ближайшие сроки первыми, а задачи без срока помещать в конец списка.",
        "status":  "todo",
        "priority":  "normal",
        "assigneeId":  "user-002",
        "dueDate":  "2026-10-22",
        "subtasks":  [
                         "Добавить выбор сортировки",
                         "Обработать задачи без срока"
                     ]
    }
];


