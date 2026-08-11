-- ==========================================================================
-- Cloudflare D1 Database Schema for Team Task Hub
-- ==========================================================================

CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  assignee TEXT NOT NULL,
  priority TEXT NOT NULL,
  status TEXT NOT NULL,
  start_date TEXT,
  deadline TEXT,
  created_at TEXT NOT NULL
);

-- Index for fast filtering by assignee, category, and status
CREATE INDEX IF NOT EXISTS idx_tasks_assignee ON tasks(assignee);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);

-- Seed Initial Demo Data into Cloudflare D1
INSERT OR IGNORE INTO tasks (id, title, description, category, assignee, priority, status, start_date, deadline, created_at) VALUES
('task-1', 'ออกแบบ UI/UX แอปพลิเคชันเวอร์ชันใหม่', 'ออกแบบหน้าจอ Home และ Checkout สำหรับแอปพลิเคชันเวอร์ชัน 2.0', 'Saveone Go', 'TADA', 'high', 'in_progress', '2026-07-20', '2026-08-05', '2026-07-20T10:00:00.000Z'),
('task-2', 'พัฒนาระบบแจ้งเตือนและระบบสะสมแต้ม', 'พัฒนา API สำหรับแจ้งเตือนโปรโมชั่นและแต้มสะสมของลูกค้า Saveone Go', 'Saveone Go', 'COM', 'medium', 'todo', '2026-07-26', '2026-08-10', '2026-07-26T11:00:00.000Z'),
('task-3', 'ถ่ายทำวิดีโอโปรโมทสินค้าคอลเลกชันใหม่', 'จัดทำ Script และถ่ายคลิปสั้นสำหรับ TikTok / Reels โปรโมทไส้ใหม่', 'ขนมเปี๊ยะแม่ปู', 'NON', 'medium', 'in_review', '2026-07-22', '2026-08-01', '2026-07-22T09:30:00.000Z'),
('task-4', 'ปรับปรุงแพ็กเกจจิ้งกล่องขนมเปี๊ยะรุ่นพิเศษ', 'ออกแบบกล่องของขวัญพรีเมียมสำหรับเทศกาลวันแม่', 'ขนมเปี๊ยะแม่ปู', 'BAS', 'high', 'done', '2026-07-10', '2026-07-24', '2026-07-10T14:00:00.000Z'),
('task-5', 'พัฒนาระบบคลังสินค้าและสต๊อกหน้าร้าน', 'เชื่อมต่อ API ระบบตัดสต๊อกสินค้าอัตโนมัติเมื่อมีการสั่งซื้อผ่าน POS', 'บ้านๆกะปูปู้', 'BAS', 'high', 'in_progress', '2026-07-15', '2026-07-28', '2026-07-15T11:00:00.000Z'),
('task-6', 'จัดทำเมนูอาหารและโปรโมชั่นประจำเดือน', 'ออกแบบชุดเมนูพิเศษพร้อมภาพถ่ายอาหารสวยงามสำหรับร้านบ้านๆกะปูปู้', 'บ้านๆกะปูปู้', 'TADA', 'medium', 'todo', '2026-07-27', '2026-08-03', '2026-07-27T10:00:00.000Z'),
('task-7', 'ทดสอบกติกาและสมดุลการ์ดชุดภาพสะท้อน', 'ทำ Playtest กับกลุ่มตัวอย่าง 50 คน บันทึก Win-rate และสถิติการเล่นการ์ดทุกใบ', 'Miracle Card Game', 'COM', 'medium', 'todo', '2026-07-25', '2026-08-10', '2026-07-25T14:20:00.000Z'),
('task-8', 'จัดทำอาร์ตเวิร์กภาพการ์ดระดับ UR และ SR', 'วาดภาพประกอบสำหรับซองการ์ดชุดใหม่ Miracle Card Game Expansion 1', 'Miracle Card Game', 'NON', 'high', 'done', '2026-07-05', '2026-07-25', '2026-07-05T09:00:00.000Z'),
('task-9', 'เตรียมเอกสารประเมินผลงานประจำไตรมาส 3', 'รวบรวม KPI และรายงานภาพรวมความคืบหน้าของทีมงานทุกคนส่งฝ่ายบริหาร', 'งานบริษัท', 'TADA', 'high', 'todo', '2026-07-28', '2026-08-02', '2026-07-28T08:00:00.000Z'),
('task-10', 'จัดซื้ออุปกรณ์คอมพิวเตอร์และจอมอนิเตอร์ใหม่', 'ดำเนินการสั่งซื้อ Workstation 2 ชุดสำหรับทีมกราฟิกและตัดต่อ', 'งานบริษัท', 'BAS', 'medium', 'in_review', '2026-07-20', '2026-08-01', '2026-07-20T13:30:00.000Z'),
('task-11', 'คิดเมนูเครื่องดื่มและท็อปปิ้งฤดูร้อน', 'ทดลองสูตรเมนูพิเศษ Topping Haus 3 เมนูสำหรับช่วงเทศกาล', 'Topping Haus', 'NON', 'low', 'done', '2026-07-10', '2026-07-26', '2026-07-10T13:00:00.000Z'),
('task-12', 'ขยายสาขาป๊อปอัพสโตร์ในห้างสรรพสินค้า', 'ติดต่อสถานที่และจัดเตรียมบูธขายเครื่องดื่ม Topping Haus', 'Topping Haus', 'COM', 'high', 'in_progress', '2026-07-24', '2026-08-08', '2026-07-24T15:00:00.000Z'),
('task-13', 'รีแบรนด์และจัดเตรียมภาพสินค้าแคมเปญใหม่', 'ถ่ายภาพ Lookbook และแต่งภาพ Mood & Tone ประจำซีซั่น Zathia', 'Zathia', 'BAS', 'medium', 'todo', '2026-07-18', '2026-08-08', '2026-07-18T16:45:00.000Z'),
('task-14', 'เปิดตัวคอลเลกชันเสื้อผ้า Zathia Streetwear', 'ยิงโฆษณา Facebook & Instagram Ads ต้อนรับยอดขายต้นเดือน', 'Zathia', 'TADA', 'high', 'done', '2026-07-01', '2026-07-20', '2026-07-01T10:00:00.000Z'),
('task-15', 'ปรับปรุงความเร็วระบบชำระเงินออนไลน์', 'ลดเวลาประมวลผล Payment Gateway ใน Harmony ให้เหลือต่ำกว่า 2 วินาที', 'Harmony', 'COM', 'high', 'done', '2026-07-12', '2026-07-25', '2026-07-12T10:15:00.000Z'),
('task-16', 'พัฒนาระบบสตรีมมิ่งเพลงไพเราะแบบไม่มีโฆษณา', 'ทดสอบการส่งข้อมูลเสียงระดับ Hi-Res บนแอป Harmony', 'Harmony', 'NON', 'medium', 'in_progress', '2026-07-22', '2026-08-06', '2026-07-22T11:20:00.000Z');
