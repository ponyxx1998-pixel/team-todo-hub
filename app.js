/* ==========================================================================
   Team Task Hub - JavaScript Application Engine
   ========================================================================== */

const APP_DATA_VERSION = 'v2.0';

const TEAM_MEMBERS = ['TADA', 'NON', 'BAS', 'COM'];

const PROJECT_CATEGORIES = [
  'Saveone Go',
  'ขนมเปี๊ยะแม่ปู',
  'บ้านๆกะปูปู้',
  'Miracle Card Game',
  'งานบริษัท',
  'Topping Haus',
  'Zathia',
  'Harmony'
];

const INITIAL_DEMO_TASKS = [
  {
    id: 'task-1',
    title: 'ออกแบบ UI/UX แอปพลิเคชันเวอร์ชันใหม่',
    description: 'ออกแบบหน้าจอ Home และ Checkout สำหรับแอปพลิเคชันเวอร์ชัน 2.0 รองรับทุกอุปกรณ์',
    category: 'Saveone Go',
    assignee: 'TADA',
    priority: 'high',
    startDate: '2026-07-20',
    deadline: '2026-08-05',
    status: 'in_progress',
    createdAt: '2026-07-20T10:00:00.000Z'
  },
  {
    id: 'task-2',
    title: 'พัฒนาระบบแจ้งเตือนและระบบสะสมแต้ม',
    description: 'พัฒนา API สำหรับแจ้งเตือนโปรโมชั่นและแต้มสะสมของลูกค้า Saveone Go',
    category: 'Saveone Go',
    assignee: 'COM',
    priority: 'medium',
    startDate: '2026-07-26',
    deadline: '2026-08-10',
    status: 'todo',
    createdAt: '2026-07-26T11:00:00.000Z'
  },
  {
    id: 'task-3',
    title: 'ถ่ายทำวิดีโอโปรโมทสินค้าคอลเลกชันใหม่',
    description: 'จัดทำ Script และถ่ายคลิปสั้นสำหรับ TikTok / Reels โปรโมทไส้ใหม่',
    category: 'ขนมเปี๊ยะแม่ปู',
    assignee: 'NON',
    priority: 'medium',
    startDate: '2026-07-22',
    deadline: '2026-08-01',
    status: 'in_review',
    createdAt: '2026-07-22T09:30:00.000Z'
  },
  {
    id: 'task-4',
    title: 'ปรับปรุงแพ็กเกจจิ้งกล่องขนมเปี๊ยะรุ่นพิเศษ',
    description: 'ออกแบบกล่องของขวัญพรีเมียมสำหรับเทศกาลวันแม่',
    category: 'ขนมเปี๊ยะแม่ปู',
    assignee: 'BAS',
    priority: 'high',
    startDate: '2026-07-10',
    deadline: '2026-07-24',
    status: 'done',
    createdAt: '2026-07-10T14:00:00.000Z'
  },
  {
    id: 'task-5',
    title: 'พัฒนาระบบคลังสินค้าและสต๊อกหน้าร้าน',
    description: 'เชื่อมต่อ API ระบบตัดสต๊อกสินค้าอัตโนมัติเมื่อมีการสั่งซื้อผ่าน POS',
    category: 'บ้านๆกะปูปู้',
    assignee: 'BAS',
    priority: 'high',
    startDate: '2026-07-15',
    deadline: '2026-07-28', // Overdue
    status: 'in_progress',
    createdAt: '2026-07-15T11:00:00.000Z'
  },
  {
    id: 'task-6',
    title: 'จัดทำเมนูอาหารและโปรโมชั่นประจำเดือน',
    description: 'ออกแบบชุดเมนูพิเศษพร้อมภาพถ่ายอาหารสวยงามสำหรับร้านบ้านๆกะปูปู้',
    category: 'บ้านๆกะปูปู้',
    assignee: 'TADA',
    priority: 'medium',
    startDate: '2026-07-27',
    deadline: '2026-08-03',
    status: 'todo',
    createdAt: '2026-07-27T10:00:00.000Z'
  },
  {
    id: 'task-7',
    title: 'ทดสอบกติกาและสมดุลการ์ดชุดภาพสะท้อน',
    description: 'ทำ Playtest กับกลุ่มตัวอย่าง 50 คน บันทึก Win-rate และสถิติการเล่นการ์ดทุกใบ',
    category: 'Miracle Card Game',
    assignee: 'COM',
    priority: 'medium',
    startDate: '2026-07-25',
    deadline: '2026-08-10',
    status: 'todo',
    createdAt: '2026-07-25T14:20:00.000Z'
  },
  {
    id: 'task-8',
    title: 'จัดทำอาร์ตเวิร์กภาพการ์ดระดับ UR และ SR',
    description: 'วาดภาพประกอบสำหรับซองการ์ดชุดใหม่ Miracle Card Game Expansion 1',
    category: 'Miracle Card Game',
    assignee: 'NON',
    priority: 'high',
    startDate: '2026-07-05',
    deadline: '2026-07-25',
    status: 'done',
    createdAt: '2026-07-05T09:00:00.000Z'
  },
  {
    id: 'task-9',
    title: 'เตรียมเอกสารประเมินผลงานประจำไตรมาส 3',
    description: 'รวบรวม KPI และรายงานภาพรวมความคืบหน้าของทีมงานทุกคนส่งฝ่ายบริหาร',
    category: 'งานบริษัท',
    assignee: 'TADA',
    priority: 'high',
    startDate: '2026-07-28',
    deadline: '2026-08-02',
    status: 'todo',
    createdAt: '2026-07-28T08:00:00.000Z'
  },
  {
    id: 'task-10',
    title: 'จัดซื้ออุปกรณ์คอมพิวเตอร์และจอมอนิเตอร์ใหม่',
    description: 'ดำเนินการสั่งซื้อ Workstation 2 ชุดสำหรับทีมกราฟิกและตัดต่อ',
    category: 'งานบริษัท',
    assignee: 'BAS',
    priority: 'medium',
    startDate: '2026-07-20',
    deadline: '2026-08-01',
    status: 'in_review',
    createdAt: '2026-07-20T13:30:00.000Z'
  },
  {
    id: 'task-11',
    title: 'คิดเมนูเครื่องดื่มและท็อปปิ้งฤดูร้อน',
    description: 'ทดลองสูตรเมนูพิเศษ Topping Haus 3 เมนูสำหรับช่วงเทศกาล',
    category: 'Topping Haus',
    assignee: 'NON',
    priority: 'low',
    startDate: '2026-07-10',
    deadline: '2026-07-26',
    status: 'done',
    createdAt: '2026-07-10T13:00:00.000Z'
  },
  {
    id: 'task-12',
    title: 'ขยายสาขาป๊อปอัพสโตร์ในห้างสรรพสินค้า',
    description: 'ติดต่อสถานที่และจัดเตรียมบูธขายเครื่องดื่ม Topping Haus',
    category: 'Topping Haus',
    assignee: 'COM',
    priority: 'high',
    startDate: '2026-07-24',
    deadline: '2026-08-08',
    status: 'in_progress',
    createdAt: '2026-07-24T15:00:00.000Z'
  },
  {
    id: 'task-13',
    title: 'รีแบรนด์และจัดเตรียมภาพสินค้าแคมเปญใหม่',
    description: 'ถ่ายภาพ Lookbook และแต่งภาพ Mood & Tone ประจำซีซั่น Zathia',
    category: 'Zathia',
    assignee: 'BAS',
    priority: 'medium',
    startDate: '2026-07-18',
    deadline: '2026-08-08',
    status: 'todo',
    createdAt: '2026-07-18T16:45:00.000Z'
  },
  {
    id: 'task-14',
    title: 'เปิดตัวคอลเลกชันเสื้อผ้า Zathia Streetwear',
    description: 'ยิงโฆษณา Facebook & Instagram Ads ต้อนรับยอดขายต้นเดือน',
    category: 'Zathia',
    assignee: 'TADA',
    priority: 'high',
    startDate: '2026-07-01',
    deadline: '2026-07-20',
    status: 'done',
    createdAt: '2026-07-01T10:00:00.000Z'
  },
  {
    id: 'task-15',
    title: 'ปรับปรุงความเร็วระบบชำระเงินออนไลน์',
    description: 'ลดเวลาประมวลผล Payment Gateway ใน Harmony ให้เหลือต่ำกว่า 2 วินาที',
    category: 'Harmony',
    assignee: 'COM',
    priority: 'high',
    startDate: '2026-07-12',
    deadline: '2026-07-25',
    status: 'done',
    createdAt: '2026-07-12T10:15:00.000Z'
  },
  {
    id: 'task-16',
    title: 'พัฒนาระบบสตรีมมิ่งเพลงไพเราะแบบไม่มีโฆษณา',
    description: 'ทดสอบการส่งข้อมูลเสียงระดับ Hi-Res บนแอป Harmony',
    category: 'Harmony',
    assignee: 'NON',
    priority: 'medium',
    startDate: '2026-07-22',
    deadline: '2026-08-06',
    status: 'in_progress',
    createdAt: '2026-07-22T11:20:00.000Z'
  }
];

// --- Application State ---
let tasks = [];
let currentView = 'manager'; // 'manager' | 'member'
let currentMember = 'TADA';   // 'TADA' | 'NON' | 'BAS' | 'COM'
let managerSubView = 'table'; // 'table' | 'board'
let draggedTaskId = null;

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadTasks();
  setupEventListeners();
  renderApp();
});

// --- Theme Management ---
function loadTheme() {
  const savedTheme = localStorage.getItem('app_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const nextTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('app_theme', nextTheme);
  updateThemeIcon(nextTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
  }
}

// --- Data Loading & Storage (Cloudflare D1 + LocalStorage Hybrid) ---
async function loadTasks() {
  // First try fetching from Cloudflare D1 API
  try {
    const res = await fetch('/api/tasks');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && !data.error && data.length > 0) {
        tasks = data;
        saveTasksLocally();
        renderApp();
        return;
      }
    }
  } catch (e) {
    console.log('Cloudflare D1 API unavailable, running in local storage mode.');
  }

  // Fallback to localStorage
  const storedVersion = localStorage.getItem('team_tasks_version');
  const stored = localStorage.getItem('team_tasks');

  if (stored && storedVersion === APP_DATA_VERSION) {
    try {
      tasks = JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse stored tasks:', e);
      tasks = [...INITIAL_DEMO_TASKS];
      saveTasksLocally();
    }
  } else {
    tasks = [...INITIAL_DEMO_TASKS];
    saveTasksLocally();
  }
}

function saveTasksLocally() {
  localStorage.setItem('team_tasks', JSON.stringify(tasks));
  localStorage.setItem('team_tasks_version', APP_DATA_VERSION);
}

async function syncTaskToD1(task, method = 'POST') {
  try {
    await fetch('/api/tasks', {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
  } catch (e) {
    console.log('D1 Sync error:', e);
  }
}

async function syncDeleteToD1(taskId) {
  try {
    await fetch(`/api/tasks?id=${encodeURIComponent(taskId)}`, {
      method: 'DELETE'
    });
  } catch (e) {
    console.log('D1 Delete error:', e);
  }
}

function resetDemoData() {
  if (confirm('คุณต้องการรีเซ็ตกลับเป็นข้อมูลตัวอย่างเริ่มต้นใช่หรือไม่? (ข้อมูลที่แก้ไขจะถูกรีเซ็ต)')) {
    tasks = [...INITIAL_DEMO_TASKS];
    saveTasksLocally();
    clearFilters();
  }
}

// --- Navigation & View Switcher ---
function switchView(viewMode, memberName = null) {
  currentView = viewMode;
  if (memberName) {
    currentMember = memberName;
  }

  // Update navbar role switcher buttons
  const buttons = document.querySelectorAll('#roleSwitcher .role-btn');
  buttons.forEach(btn => {
    const btnView = btn.getAttribute('data-view');
    const btnMember = btn.getAttribute('data-member');

    if (viewMode === 'manager' && btnView === 'manager') {
      btn.classList.add('active');
    } else if (viewMode === 'member' && btnView === 'member' && btnMember === currentMember) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Toggle filter visibility for Manager vs Member view
  const assigneeFilterContainer = document.getElementById('assigneeFilterContainer');
  const statusFilterContainer = document.getElementById('statusFilterContainer');

  if (viewMode === 'manager') {
    assigneeFilterContainer.classList.remove('hidden');
    statusFilterContainer.classList.remove('hidden');
  } else {
    assigneeFilterContainer.classList.add('hidden');
    statusFilterContainer.classList.add('hidden');
  }

  // Toggle View Sections
  document.getElementById('managerView').classList.toggle('active', viewMode === 'manager');
  document.getElementById('memberView').classList.toggle('active', viewMode === 'member');

  renderApp();
}

function setManagerSubView(subView) {
  managerSubView = subView;
  document.getElementById('viewModeTableBtn').classList.toggle('active', subView === 'table');
  document.getElementById('viewModeBoardBtn').classList.toggle('active', subView === 'board');

  document.getElementById('managerTableView').classList.toggle('hidden', subView !== 'table');
  document.getElementById('managerBoardView').classList.toggle('hidden', subView !== 'board');

  renderApp();
}

// --- Main Render Engine ---
function renderApp() {
  if (currentView === 'manager') {
    renderManagerView();
  } else {
    renderMemberView();
  }
  lucide.createIcons();
}

// --- Filtering Logic ---
function getFilteredTasks() {
  const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const priority = document.getElementById('priorityFilter').value;
  const status = document.getElementById('statusFilter').value;
  const assignee = document.getElementById('assigneeFilter').value;

  const today = new Date().toISOString().split('T')[0];

  return tasks.filter(task => {
    // Member View Filter
    if (currentView === 'member' && task.assignee !== currentMember) {
      return false;
    }

    // Assignee Filter (Manager view)
    if (currentView === 'manager' && assignee !== 'all' && task.assignee !== assignee) {
      return false;
    }

    // Category Filter
    if (category !== 'all' && task.category !== category) {
      return false;
    }

    // Priority Filter
    if (priority !== 'all' && task.priority !== priority) {
      return false;
    }

    // Status Filter (includes Overdue virtual status)
    if (status === 'overdue') {
      if (task.status === 'done' || !task.deadline || task.deadline >= today) {
        return false;
      }
    } else if (status !== 'all' && task.status !== status) {
      return false;
    }

    // Search Query (Search title, description, category, assignee)
    if (searchQuery) {
      const matchTitle = (task.title || '').toLowerCase().includes(searchQuery);
      const matchDesc = (task.description || '').toLowerCase().includes(searchQuery);
      const matchCat = (task.category || '').toLowerCase().includes(searchQuery);
      const matchAssignee = (task.assignee || '').toLowerCase().includes(searchQuery);
      if (!matchTitle && !matchDesc && !matchCat && !matchAssignee) return false;
    }

    return true;
  });
}

function applyFilters() {
  renderApp();
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('categoryFilter').value = 'all';
  document.getElementById('priorityFilter').value = 'all';
  document.getElementById('statusFilter').value = 'all';
  document.getElementById('assigneeFilter').value = 'all';
  renderApp();
}

// ==========================================================================
// MANAGER VIEW RENDERING
// ==========================================================================
function renderManagerView() {
  const filteredTasks = getFilteredTasks();
  const today = new Date().toISOString().split('T')[0];

  // Check if any filter is currently active
  const isFiltered = (
    document.getElementById('searchInput').value.trim() !== '' ||
    document.getElementById('categoryFilter').value !== 'all' ||
    document.getElementById('priorityFilter').value !== 'all' ||
    document.getElementById('statusFilter').value !== 'all' ||
    document.getElementById('assigneeFilter').value !== 'all'
  );

  // Use filtered tasks for stats when filtered, otherwise use all tasks
  const statsSourceTasks = isFiltered ? filteredTasks : tasks;

  // 1. Calculate Stats
  const total = statsSourceTasks.length;
  const todo = statsSourceTasks.filter(t => t.status === 'todo').length;
  const inProgress = statsSourceTasks.filter(t => t.status === 'in_progress').length;
  const inReview = statsSourceTasks.filter(t => t.status === 'in_review').length;
  const done = statsSourceTasks.filter(t => t.status === 'done').length;
  const overdue = statsSourceTasks.filter(t => t.status !== 'done' && t.deadline && t.deadline < today).length;

  document.getElementById('statTotal').innerText = total;
  document.getElementById('statTodo').innerText = todo;
  document.getElementById('statInProgress').innerText = inProgress;
  document.getElementById('statInReview').innerText = inReview;
  document.getElementById('statDone').innerText = done;
  document.getElementById('statOverdue').innerText = overdue;

  // 2. Render Team Workload Grid
  const workloadGrid = document.getElementById('memberWorkloadGrid');
  workloadGrid.innerHTML = TEAM_MEMBERS.map(member => {
    const memberTasks = statsSourceTasks.filter(t => t.assignee === member);
    const memberTotal = memberTasks.length;
    const memberDone = memberTasks.filter(t => t.status === 'done').length;
    const memberOverdue = memberTasks.filter(t => t.status !== 'done' && t.deadline && t.deadline < today).length;
    const memberInProgress = memberTasks.filter(t => t.status === 'in_progress').length;

    const percent = memberTotal > 0 ? Math.round((memberDone / memberTotal) * 100) : 0;
    const initial = member.charAt(0);
    const avatarClass = `avatar-${member.toLowerCase()}`;

    return `
      <div class="member-workload-card" onclick="switchView('member', '${member}')">
        <div class="member-card-header">
          <div class="member-card-user">
            <span class="avatar-badge ${avatarClass}">${initial}</span>
            <div>
              <div class="member-card-name">${member}</div>
              <div class="member-card-sub">งานในระบบ ${memberTotal} รายการ</div>
            </div>
          </div>
          <i data-lucide="chevron-right" style="color: var(--text-muted);"></i>
        </div>

        <div class="progress-bar-container">
          <div class="progress-info">
            <span>ความสำเร็จ</span>
            <span><strong>${percent}%</strong> (${memberDone}/${memberTotal})</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
        </div>

        <div class="member-status-pills">
          <span class="mini-pill" style="color: var(--status-progress);">⚡ กำลังทำ: ${memberInProgress}</span>
          ${memberOverdue > 0 ? `<span class="mini-pill" style="color: #ef4444; background: rgba(239,68,68,0.15);">🚨 เลยกำหนด: ${memberOverdue}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // 3. Render Projects Breakdown Grid
  const selectedCat = document.getElementById('categoryFilter').value;
  const projectsGrid = document.getElementById('projectsGrid');
  projectsGrid.innerHTML = PROJECT_CATEGORIES.map(category => {
    const catTasks = statsSourceTasks.filter(t => t.category === category);
    const count = catTasks.length;
    const badgeClass = getCategoryBadgeClass(category);
    const isSelected = selectedCat === category;

    return `
      <div class="project-card ${isSelected ? 'active-project-card' : ''}" 
           onclick="filterByCategory('${category}')" 
           style="cursor: pointer;"
           title="คลิกเพื่อกรองงานเฉพาะโครงการ ${category}">
        <div>
          <span class="badge-category ${badgeClass}" style="margin-bottom: 6px;">${category}</span>
          <div class="project-title">${category}</div>
        </div>
        <div class="project-count">${count}</div>
      </div>
    `;
  }).join('');

  // 4. Render Master Table or Board View
  if (managerSubView === 'table') {
    renderMasterTable(filteredTasks);
  } else {
    renderKanbanBoard(filteredTasks, 'globalKanbanBoard', true);
  }
}

function filterByCategory(category) {
  const catSelect = document.getElementById('categoryFilter');
  if (catSelect.value === category) {
    catSelect.value = 'all'; // Toggle off
  } else {
    catSelect.value = category;
  }
  applyFilters();
}

function renderMasterTable(taskList) {
  const tbody = document.getElementById('masterTaskTableBody');
  const today = new Date().toISOString().split('T')[0];

  if (taskList.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 40px; color: var(--text-muted);">
          <i data-lucide="inbox" style="width: 36px; height: 36px; margin-bottom: 8px; opacity: 0.5;"></i>
          <p>ไม่พบรายการงานตามเงื่อนไขที่ค้นหาหรือเลือกกรองไว้</p>
          <button class="btn btn-sm btn-outline" style="margin-top: 10px;" onclick="clearFilters()">
            <i data-lucide="rotate-ccw"></i> ล้างตัวกรองทั้งหมด
          </button>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = taskList.map(task => {
    const badgeClass = getCategoryBadgeClass(task.category);
    const isOverdue = task.status !== 'done' && task.deadline && task.deadline < today;
    const avatarClass = `avatar-${task.assignee.toLowerCase()}`;

    return `
      <tr>
        <td>
          <div class="task-cell-title">${escapeHtml(task.title)}</div>
          <div class="task-cell-desc">${escapeHtml(task.description || '-')}</div>
        </td>
        <td>
          <span class="badge-category ${badgeClass}">${task.category}</span>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="avatar-badge ${avatarClass}">${task.assignee.charAt(0)}</span>
            <span style="font-weight: 500;">${task.assignee}</span>
          </div>
        </td>
        <td>
          ${getPriorityBadge(task.priority)}
        </td>
        <td style="color: var(--text-secondary);">${task.startDate || '-'}</td>
        <td>
          <span class="${isOverdue ? 'badge-overdue' : ''}">
            ${isOverdue ? '<i data-lucide="alert-circle" style="width:14px;"></i>' : ''}
            ${task.deadline || '-'}
          </span>
        </td>
        <td>
          <select class="status-select status-${task.status}" onchange="updateTaskStatus('${task.id}', this.value)">
            <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>📝 ต้องทำ</option>
            <option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>⚡ กำลังทำ</option>
            <option value="in_review" ${task.status === 'in_review' ? 'selected' : ''}>🔍 รอตรวจ</option>
            <option value="done" ${task.status === 'done' ? 'selected' : ''}>✅ เสร็จสิ้น</option>
          </select>
        </td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="action-icon-btn" onclick="openDetailModal('${task.id}')" title="ดูรายละเอียด">
              <i data-lucide="eye"></i>
            </button>
            <button class="action-icon-btn" onclick="openTaskModal('${task.id}')" title="แก้ไข">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="action-icon-btn danger" onclick="deleteTask('${task.id}')" title="ลบ">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// ==========================================================================
// MEMBER KANBAN VIEW RENDERING
// ==========================================================================
function renderMemberView() {
  const filteredTasks = getFilteredTasks();
  const today = new Date().toISOString().split('T')[0];

  // Update Member Header info
  document.getElementById('currentMemberName').innerText = currentMember;
  const avatarElem = document.getElementById('currentMemberAvatar');
  avatarElem.innerText = currentMember.charAt(0);
  avatarElem.className = `member-avatar-large avatar-${currentMember.toLowerCase()}`;

  // Member stats summary pills
  const memberTasks = tasks.filter(t => t.assignee === currentMember);
  const total = memberTasks.length;
  const done = memberTasks.filter(t => t.status === 'done').length;
  const overdue = memberTasks.filter(t => t.status !== 'done' && t.deadline && t.deadline < today).length;

  document.getElementById('memberStatsSummary').innerHTML = `
    <span class="btn btn-sm btn-outline"><i data-lucide="layers"></i> งานทั้งหมด: <strong>${total}</strong></span>
    <span class="btn btn-sm btn-outline" style="border-color: var(--status-done); color: var(--status-done);"><i data-lucide="check-circle"></i> เสร็จสิ้น: <strong>${done}</strong></span>
    ${overdue > 0 ? `<span class="btn btn-sm btn-outline" style="border-color: #ef4444; color: #ef4444;"><i data-lucide="alert-triangle"></i> เกินกำหนด: <strong>${overdue}</strong></span>` : ''}
  `;

  renderKanbanBoard(filteredTasks, 'memberKanbanBoard', false);
}

// ==========================================================================
// KANBAN BOARD ENGINE (Reusable for Global & Member Boards)
// ==========================================================================
function renderKanbanBoard(taskList, boardContainerId, showAssignee = false) {
  const container = document.getElementById(boardContainerId);
  const today = new Date().toISOString().split('T')[0];

  const columns = [
    { key: 'todo', title: '📝 ต้องทำ (To Do)', class: 'col-todo' },
    { key: 'in_progress', title: '⚡ กำลังทำ (In Progress)', class: 'col-progress' },
    { key: 'in_review', title: '🔍 รอตรวจ (In Review)', class: 'col-review' },
    { key: 'done', title: '✅ เสร็จสิ้น (Done)', class: 'col-done' }
  ];

  container.innerHTML = columns.map(col => {
    const colTasks = taskList.filter(t => t.status === col.key);

    const cardsHtml = colTasks.length > 0 ? colTasks.map(task => {
      const isOverdue = task.status !== 'done' && task.deadline && task.deadline < today;
      const catBadge = getCategoryBadgeClass(task.category);
      const avatarClass = `avatar-${task.assignee.toLowerCase()}`;

      return `
        <div class="kanban-card" 
             draggable="true" 
             ondragstart="handleDragStart(event, '${task.id}')"
             ondragend="handleDragEnd(event)"
             onclick="openDetailModal('${task.id}')">
          <div class="card-top">
            <span class="badge-category ${catBadge}">${task.category}</span>
            ${getPriorityBadge(task.priority)}
          </div>

          <div class="card-title">${escapeHtml(task.title)}</div>
          ${task.description ? `<div class="card-desc">${escapeHtml(task.description)}</div>` : ''}

          <div class="card-footer">
            <div class="card-dates">
              ${showAssignee ? `<span class="avatar-badge ${avatarClass}" style="width: 20px; height: 20px; font-size: 0.65rem;" title="${task.assignee}">${task.assignee.charAt(0)}</span>` : ''}
              <span class="${isOverdue ? 'badge-overdue' : ''}">
                <i data-lucide="${isOverdue ? 'alert-triangle' : 'calendar'}" style="width: 13px; height: 13px;"></i>
                ${task.deadline || '-'}
              </span>
            </div>
            
            <div class="card-actions" onclick="event.stopPropagation()">
              <button class="action-icon-btn" onclick="openTaskModal('${task.id}')" title="แก้ไข">
                <i data-lucide="edit-2"></i>
              </button>
              <button class="action-icon-btn danger" onclick="deleteTask('${task.id}')" title="ลบ">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('') : `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 30px 10px;">ไม่มีงานในคอลัมน์นี้</div>`;

    return `
      <div class="kanban-column ${col.class}">
        <div class="column-header">
          <span class="column-title">${col.title}</span>
          <span class="column-count">${colTasks.length}</span>
        </div>
        <div class="column-cards" 
             data-status="${col.key}"
             ondragover="handleDragOver(event)"
             ondragenter="handleDragEnter(event)"
             ondragleave="handleDragLeave(event)"
             ondrop="handleDrop(event, '${col.key}')">
          ${cardsHtml}
        </div>
      </div>
    `;
  }).join('');
}

// --- Drag and Drop Handlers ---
function handleDragStart(e, taskId) {
  draggedTaskId = taskId;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', taskId);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedTaskId = null;
  document.querySelectorAll('.column-cards').forEach(col => col.classList.remove('drag-over'));
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
  e.preventDefault();
  const cardsContainer = e.currentTarget;
  cardsContainer.classList.add('drag-over');
}

function handleDragLeave(e) {
  const cardsContainer = e.currentTarget;
  if (!cardsContainer.contains(e.relatedTarget)) {
    cardsContainer.classList.remove('drag-over');
  }
}

function handleDrop(e, targetStatus) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');

  if (draggedTaskId) {
    updateTaskStatus(draggedTaskId, targetStatus);
  }
}

// --- Task CRUD Functions ---
function updateTaskStatus(taskId, newStatus) {
  const task = tasks.find(t => t.id === taskId);
  if (task && task.status !== newStatus) {
    task.status = newStatus;
    saveTasksLocally();
    syncTaskToD1(task, 'PUT');
    renderApp();
  }
}

function deleteTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task && confirm(`คุณต้องการลบงาน "${task.title}" ใช่หรือไม่?`)) {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasksLocally();
    syncDeleteToD1(taskId);
    renderApp();
  }
}

// --- Modal Functions (Create / Edit Task) ---
function openTaskModal(taskId = null) {
  const modal = document.getElementById('taskModal');
  const form = document.getElementById('taskForm');
  const modalTitle = document.getElementById('modalTitle');

  if (!modal || !form) return;

  form.reset();

  if (taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (modalTitle) modalTitle.innerHTML = `<i data-lucide="edit-3"></i> แก้ไขงาน`;
    document.getElementById('taskId').value = task.id;
    document.getElementById('taskTitle').value = task.title || '';
    document.getElementById('taskCategory').value = task.category || 'Saveone Go';
    document.getElementById('taskAssignee').value = task.assignee || 'TADA';
    document.getElementById('taskPriority').value = task.priority || 'medium';
    document.getElementById('taskStatus').value = task.status || 'todo';
    document.getElementById('taskStartDate').value = task.startDate || '';
    document.getElementById('taskDeadline').value = task.deadline || '';
    document.getElementById('taskDescription').value = task.description || '';
  } else {
    if (modalTitle) modalTitle.innerHTML = `<i data-lucide="plus-circle"></i> สร้างงานใหม่`;
    document.getElementById('taskId').value = '';
    
    // Set default assignee if in member view
    if (currentView === 'member') {
      document.getElementById('taskAssignee').value = currentMember;
    }

    // Default start date = today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('taskStartDate').value = today;
  }

  modal.classList.add('active');
  modal.style.display = 'flex';

  setTimeout(() => {
    const titleInput = document.getElementById('taskTitle');
    if (titleInput) titleInput.focus();
  }, 50);

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try { lucide.createIcons(); } catch (e) {}
  }
}

function closeTaskModal() {
  const modal = document.getElementById('taskModal');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function handleTaskSubmit(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('taskId').value;
  const title = document.getElementById('taskTitle').value.trim();
  const category = document.getElementById('taskCategory').value;
  const assignee = document.getElementById('taskAssignee').value;
  const priority = document.getElementById('taskPriority').value;
  const status = document.getElementById('taskStatus').value;
  const startDate = document.getElementById('taskStartDate').value;
  const deadline = document.getElementById('taskDeadline').value;
  const description = document.getElementById('taskDescription').value.trim();

  if (!title) {
    alert('กรุณาระบุชื่องาน');
    return;
  }

  let taskToSync = null;
  let method = 'POST';

  if (id) {
    // Edit existing task
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        title,
        category,
        assignee,
        priority,
        status,
        startDate,
        deadline,
        description
      };
      taskToSync = tasks[taskIndex];
      method = 'PUT';
    }
  } else {
    // Create new task
    const newTask = {
      id: 'task-' + Date.now(),
      title,
      category,
      assignee,
      priority,
      status,
      startDate,
      deadline,
      description,
      createdAt: new Date().toISOString()
    };
    tasks.unshift(newTask);
    taskToSync = newTask;
    method = 'POST';
  }

  saveTasksLocally();
  if (taskToSync) {
    syncTaskToD1(taskToSync, method);
  }
  closeTaskModal();
  renderApp();
}

// --- Detail View Modal ---
function openDetailModal(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  const detailModalBody = document.getElementById('detailModalBody');
  const today = new Date().toISOString().split('T')[0];
  const isOverdue = task.status !== 'done' && task.deadline && task.deadline < today;
  const catBadge = getCategoryBadgeClass(task.category);
  const avatarClass = `avatar-${task.assignee.toLowerCase()}`;

  detailModalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
      <span class="badge-category ${catBadge}">${task.category}</span>
      ${getPriorityBadge(task.priority)}
    </div>

    <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; line-height: 1.3;">${escapeHtml(task.title)}</h2>

    <div class="detail-grid">
      <div class="detail-item">
        <label>ผู้รับผิดชอบ (Assignee)</label>
        <span style="display: flex; align-items: center; gap: 6px; margin-top: 4px;">
          <span class="avatar-badge ${avatarClass}">${task.assignee.charAt(0)}</span>
          ${task.assignee}
        </span>
      </div>
      <div class="detail-item">
        <label>สถานะงาน (Status)</label>
        <span style="margin-top: 4px; display: inline-block;">
          <select class="status-select status-${task.status}" onchange="updateTaskStatus('${task.id}', this.value); closeDetailModal();">
            <option value="todo" ${task.status === 'todo' ? 'selected' : ''}>📝 ต้องทำ (To Do)</option>
            <option value="in_progress" ${task.status === 'in_progress' ? 'selected' : ''}>⚡ กำลังทำ (In Progress)</option>
            <option value="in_review" ${task.status === 'in_review' ? 'selected' : ''}>🔍 รอตรวจ (In Review)</option>
            <option value="done" ${task.status === 'done' ? 'selected' : ''}>✅ เสร็จสิ้น (Done)</option>
          </select>
        </span>
      </div>
      <div class="detail-item">
        <label>วันที่เริ่มงาน</label>
        <span>${task.startDate || '-'}</span>
      </div>
      <div class="detail-item">
        <label>วันกำหนดส่ง (Deadline)</label>
        <span class="${isOverdue ? 'badge-overdue' : ''}">
          ${isOverdue ? '<i data-lucide="alert-triangle" style="width:14px;"></i> เลยกำหนด ' : ''}
          ${task.deadline || '-'}
        </span>
      </div>
    </div>

    <div style="margin-top: 16px;">
      <label style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500; display: block; margin-bottom: 6px;">รายละเอียดงาน:</label>
      <div class="detail-desc">${escapeHtml(task.description || 'ไม่มีรายละเอียดเพิ่มเติม')}</div>
    </div>
  `;

  document.getElementById('editFromDetailBtn').onclick = () => {
    closeDetailModal();
    openTaskModal(task.id);
  };

  const detailModal = document.getElementById('detailModal');
  if (detailModal) {
    detailModal.classList.add('active');
    detailModal.style.display = 'flex';
  }

  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try { lucide.createIcons(); } catch (e) {}
  }
}

function closeDetailModal() {
  const detailModal = document.getElementById('detailModal');
  if (detailModal) {
    detailModal.classList.remove('active');
    detailModal.style.display = 'none';
  }
}

// --- Utility Helpers ---
function getCategoryBadgeClass(category) {
  switch (category) {
    case 'Saveone Go': return 'cat-saveone';
    case 'ขนมเปี๊ยะแม่ปู': return 'cat-kanom';
    case 'บ้านๆกะปูปู้': return 'cat-banban';
    case 'Miracle Card Game': return 'cat-miracle';
    case 'งานบริษัท': return 'cat-company';
    case 'Topping Haus': return 'cat-topping';
    case 'Zathia': return 'cat-zathia';
    case 'Harmony': return 'cat-harmony';
    default: return 'cat-company';
  }
}

function getPriorityBadge(priority) {
  switch (priority) {
    case 'high':
      return `<span class="badge-priority priority-high"><i data-lucide="alert-circle" style="width:12px;"></i> สูง</span>`;
    case 'medium':
      return `<span class="badge-priority priority-medium"><i data-lucide="minus" style="width:12px;"></i> กลาง</span>`;
    case 'low':
      return `<span class="badge-priority priority-low"><i data-lucide="arrow-down" style="width:12px;"></i> ต่ำ</span>`;
    default:
      return '';
  }
}

function setupEventListeners() {
  // Close modals when clicking backdrop
  window.addEventListener('click', (e) => {
    const taskModal = document.getElementById('taskModal');
    const detailModal = document.getElementById('detailModal');
    if (e.target === taskModal) closeTaskModal();
    if (e.target === detailModal) closeDetailModal();
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
